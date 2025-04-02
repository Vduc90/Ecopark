# YÊU CẦU VỀ SERVER CHO TRANG WEB ECOLIFE

## YÊU CẦU TỐI THIỂU

### Phần cứng
- **CPU**: 1 core
- **RAM**: 2GB
- **Dung lượng ổ cứng**: 10GB

### Phần mềm
- **Hệ điều hành**: Linux (Ubuntu 20.04 LTS hoặc mới hơn được khuyến nghị)
- **Web server**: Apache 2.4+ hoặc Nginx 1.18+
- **Node.js**: v16.0.0 hoặc cao hơn
- **npm**: 7.0.0 hoặc cao hơn
- **MySQL**: 5.7+ hoặc MariaDB 10.5+
- **PHP**: 7.4+ (nếu hosting sử dụng cPanel hoặc tương tự)

## CÁCH THIẾT LẬP MÔI TRƯỜNG

### Trên VPS hoặc Dedicated Server

1. **Cài đặt Node.js và npm**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Cài đặt PM2 để quản lý ứng dụng Node.js**:
   ```bash
   npm install -g pm2
   ```

3. **Cài đặt MySQL**:
   ```bash
   sudo apt-get install -y mysql-server
   sudo mysql_secure_installation
   ```

4. **Cài đặt và cấu hình Nginx** (Khuyến nghị):
   ```bash
   sudo apt-get install -y nginx
   ```

   Tạo file cấu hình Nginx:
   ```bash
   sudo nano /etc/nginx/sites-available/ecolife
   ```

   Thêm nội dung:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Kích hoạt cấu hình:
   ```bash
   sudo ln -s /etc/nginx/sites-available/ecolife /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. **Cài đặt Certbot để có SSL**:
   ```bash
   sudo apt-get install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

### Trên Shared Hosting

Nếu sử dụng shared hosting, cần đảm bảo:

1. Hosting hỗ trợ Node.js (nhiều shared hosting không hỗ trợ)
2. Có quyền tạo và quản lý cơ sở dữ liệu MySQL
3. Có quyền tạo file .htaccess và cấu hình rewrite rules

Nếu shared hosting không hỗ trợ Node.js, cần cân nhắc chuyển sang VPS hoặc dịch vụ hosting chuyên biệt như:
- Vercel
- Heroku
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## LƯU Ý KHI TRIỂN KHAI

1. **Bảo mật**:
   - Đổi mật khẩu quản trị mặc định ngay sau khi triển khai
   - Cấu hình tường lửa để chỉ mở các cổng cần thiết (80, 443, 3306 nếu cần)
   - Thiết lập SSL/TLS cho trang web

2. **Backup**:
   - Tạo lịch backup tự động cho cơ sở dữ liệu
   - Lưu trữ backup ở vị trí an toàn, tách biệt với server chính

3. **Giám sát**:
   - Thiết lập giám sát server để phát hiện sớm các vấn đề
   - Cài đặt hệ thống thông báo khi có sự cố xảy ra

## HỖ TRỢ KỸ THUẬT

Nếu cần hỗ trợ trong quá trình cài đặt, vui lòng liên hệ:
- Email: support@ecolife.vn
- Điện thoại: 0987654321