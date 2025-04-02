# HƯỚNG DẪN TRIỂN KHAI TRANG WEB ECOLIFE

## YÊU CẦU HỆ THỐNG

- Máy chủ web: Apache hoặc Nginx
- Node.js phiên bản 20.x trở lên
- MySQL hoặc MariaDB phiên bản 8.0 trở lên
- PHP 8.0 trở lên (cho phpMyAdmin hoặc các công cụ quản lý DB khác)
- SSL được khuyến nghị để bảo mật

## CÀI ĐẶT CƠ SỞ DỮ LIỆU

1. Tạo một cơ sở dữ liệu mới trên máy chủ MySQL:
   - Đăng nhập vào hệ thống quản lý cơ sở dữ liệu (phpMyAdmin, MySQL Workbench, ...)
   - Tạo database mới với tên `ecolife_db` với collation `utf8mb4_unicode_ci`
   - Hoặc sử dụng lệnh: `CREATE DATABASE ecolife_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`

2. Nhập dữ liệu từ file SQL:
   - Bước 1: Sử dụng file `db_setup.sql` để tạo cấu trúc các bảng
      - Trong phpMyAdmin: Chọn database đã tạo > Tab "Import" > Chọn file `db_setup.sql` > Nhấn "Go"
      - Hoặc sử dụng lệnh: `mysql -u username -p ecolife_db < db_setup.sql`
   
   - Bước 2: Sử dụng file `db_sample_data.sql` để nhập dữ liệu mẫu
      - Trong phpMyAdmin: Chọn database đã tạo > Tab "Import" > Chọn file `db_sample_data.sql` > Nhấn "Go"
      - Hoặc sử dụng lệnh: `mysql -u username -p ecolife_db < db_sample_data.sql`

## TRIỂN KHAI MÃ NGUỒN

### Chuẩn bị mã nguồn:

1. Build frontend:
   ```bash
   cd path/to/project
   npm install
   npm run build
   ```

2. Cấu trúc thư mục triển khai:
   ```
   /public_html (hoặc thư mục web root)
   │
   ├── assets/           # Các tệp tĩnh (CSS, JS, hình ảnh)
   ├── server/           # Mã nguồn backend
   ├── index.html        # Trang chủ đã được build
   ├── .htaccess         # Cấu hình Apache
   └── ... (các file khác)
   ```

### Cài đặt trên Shared Hosting:

1. Upload tất cả các file và thư mục sau khi build lên thư mục web root của hosting
2. Đảm bảo file `.htaccess` được upload lên thư mục gốc
3. Cấu hình biến môi trường thông qua file `.env` hoặc thông qua control panel hosting

### Cài đặt trên VPS:

1. Cài đặt Node.js và npm:
   ```bash
   curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. Clone repository hoặc upload code lên server:
   ```bash
   cd /var/www
   git clone [repository-url] ecolife
   cd ecolife
   npm install
   ```

3. Cài đặt PM2 để quản lý ứng dụng Node.js:
   ```bash
   npm install -g pm2
   ```

4. Build và khởi động ứng dụng:
   ```bash
   npm run build
   pm2 start server/index.js --name "ecolife"
   pm2 save
   pm2 startup
   ```

5. Cấu hình Nginx hoặc Apache để phục vụ ứng dụng

### Cấu hình Nginx (ví dụ):

Tạo file `/etc/nginx/sites-available/ecolife.conf`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name yourdomain.com www.yourdomain.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    root /var/www/ecolife/dist;
    index index.html;
    
    # SPA rewrite rule
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Proxy API requests to Node.js server
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

Kích hoạt cấu hình:
```bash
sudo ln -s /etc/nginx/sites-available/ecolife.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## CẤU HÌNH BIẾN MÔI TRƯỜNG

Tạo file `.env` trong thư mục root của dự án với các biến:

```
# Database
DATABASE_URL=mysql://your_db_user:your_db_password@localhost:3306/ecolife_db

# Hoặc sử dụng các biến riêng lẻ
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=ecolife_db

# Server
PORT=5000
NODE_ENV=production
BASE_URL=https://yourdomain.com

# Email (Nếu dùng)
EMAIL_SMTP_HOST=smtp.example.com
EMAIL_SMTP_PORT=587
EMAIL_SMTP_SECURE=false
EMAIL_SMTP_USER=your-email@example.com
EMAIL_SMTP_PASS=your-email-password
EMAIL_NOTIFICATION_RECIPIENT=notifications@example.com

# JWT (cho authentication)
JWT_SECRET=your-very-long-and-secure-random-secret-key
JWT_EXPIRES_IN=7d
```

Lưu ý: Đối với mật khẩu và thông tin nhạy cảm, hãy sử dụng các ký tự đặc biệt, ký tự viết hoa, và số để tăng cường bảo mật. Với các hosting shared, bạn có thể cấu hình các biến môi trường này thông qua control panel của hosting thay vì sử dụng file .env.

## QUẢN TRỊ TRANG WEB

- Truy cập vào trang quản trị: `https://yourdomain.com/admin/login`
- Đăng nhập với thông tin mặc định:
  - Username: `admin`
  - Password: `admin123`
- **Lưu ý**: Hãy đổi mật khẩu mặc định ngay sau khi đăng nhập lần đầu để đảm bảo an toàn

## BẢO TRÌ VÀ CẬP NHẬT

### Sao lưu dữ liệu:

```bash
# Sao lưu database
mysqldump -u username -p ecolife_db > backup_$(date +%Y%m%d).sql

# Sao lưu mã nguồn
tar -czvf ecolife_backup_$(date +%Y%m%d).tar.gz /path/to/ecolife
```

### Cập nhật ứng dụng:

1. Sao lưu dữ liệu và mã nguồn hiện tại
2. Pull hoặc upload mã nguồn mới
3. Cài đặt dependencies: `npm install`
4. Build lại frontend: `npm run build`
5. Khởi động lại server:
   - Với PM2: `pm2 restart ecolife`
   - Với hosting thông thường: Khởi động lại ứng dụng qua control panel

## XỬ LÝ SỰ CỐ

### Trang web không hoạt động:

1. Kiểm tra logs:
   - Với PM2: `pm2 logs ecolife`
   - Với Apache: `/var/log/apache2/error.log`
   - Với Nginx: `/var/log/nginx/error.log`

2. Kiểm tra kết nối cơ sở dữ liệu:
   - Xác nhận thông tin kết nối trong file `.env`
   - Thử kết nối trực tiếp: `mysql -u username -p -h hostname ecolife_db`

3. Kiểm tra Node.js và NPM:
   - `node -v`
   - `npm -v`

### Lỗi 500 Internal Server Error:

1. Kiểm tra quyền truy cập file và thư mục:
   ```bash
   chmod -R 755 /path/to/ecolife
   chown -R www-data:www-data /path/to/ecolife
   ```

2. Kiểm tra file `.htaccess` có được hỗ trợ bởi hosting

### Trang quản trị không truy cập được:

1. Kiểm tra cấu hình rewrite có hoạt động
2. Đảm bảo bảng `users` trong database có dữ liệu
3. Reset mật khẩu admin trong database nếu cần thiết

## LIÊN HỆ HỖ TRỢ

Nếu bạn gặp bất kỳ vấn đề nào trong quá trình triển khai, vui lòng liên hệ:

- Email: support@ecolife.vn
- Điện thoại: 0987654321
- Thời gian hỗ trợ: Thứ 2 - Thứ 6, 9:00 - 17:00