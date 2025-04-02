# HƯỚNG DẪN NHANH TRIỂN KHAI TRANG WEB ECOLIFE

## BƯỚC 1: TẢI LÊN FILE

1. Upload toàn bộ mã nguồn lên thư mục gốc của hosting (public_html hoặc www)
2. Đảm bảo file `.htaccess` được tải lên đúng vị trí
3. Tạo file `.env` dựa trên mẫu `.env.example` và điền thông tin cấu hình thực tế

## BƯỚC 2: CÀI ĐẶT CƠ SỞ DỮ LIỆU

1. Tạo cơ sở dữ liệu mới trên hosting với tên `ecolife_db` (collation: utf8mb4_unicode_ci)
2. Import file `db_setup.sql` để tạo cấu trúc bảng
3. Import file `db_sample_data.sql` để thêm dữ liệu mẫu

## BƯỚC 3: CẤU HÌNH MÔI TRƯỜNG

1. Điền thông tin kết nối cơ sở dữ liệu vào file `.env`:
   ```
   DATABASE_URL=mysql://username:password@localhost:3306/ecolife_db
   ```
   Thay thế `username`, `password` bằng thông tin đăng nhập thực tế của cơ sở dữ liệu

2. Thay đổi các cấu hình khác trong `.env` nếu cần, đặc biệt là:
   - `JWT_SECRET`: Khóa bí mật cho authentication
   - `BASE_URL`: URL của trang web

## BƯỚC 4: CÀI ĐẶT DEPENDENCIES VÀ BUILD

Nếu hosting hỗ trợ Node.js, hãy chạy các lệnh sau:

```bash
npm install
npm run build
```

## BƯỚC 5: KHỞI ĐỘNG ỨNG DỤNG

### Trên hosting hỗ trợ Node.js:

1. Cài đặt PM2 (nếu chưa có):
   ```bash
   npm install -g pm2
   ```

2. Khởi động ứng dụng:
   ```bash
   pm2 start dist/index.js --name "ecolife"
   ```

### Trên shared hosting không hỗ trợ Node.js:

Liên hệ với nhà cung cấp hosting để được hỗ trợ chạy ứng dụng Node.js hoặc cân nhắc chuyển sang VPS/Cloud server.

## TRUY CẬP TRANG QUẢN TRỊ

1. Truy cập: `https://yourdomain.com/admin/login`
2. Đăng nhập với thông tin mặc định:
   - Username: `admin`
   - Password: `admin123`

**Lưu ý quan trọng**: Hãy thay đổi mật khẩu mặc định ngay sau khi đăng nhập lần đầu!

## XỬ LÝ SỰ CỐ

Tham khảo file `HƯỚNG_DẪN_TRIỂN_KHAI.md` để biết thêm chi tiết và cách xử lý các sự cố phổ biến.

## HỖ TRỢ

Nếu gặp vấn đề trong quá trình triển khai, vui lòng liên hệ:
- Email: support@ecolife.vn
- Điện thoại: 0987654321