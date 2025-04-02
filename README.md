# Ecopark
Website bất động sản Eco.daklak.vn sử dụng Node.js và React

# TRANG WEB ECOLIFE - BẤT ĐỘNG SẢN

## GIỚI THIỆU

Đây là package triển khai cho trang web bất động sản Ecopark. Gói này chứa tất cả các file cần thiết để triển khai trang web lên hosting hoặc server.

## NỘI DUNG PACKAGE

- `dist/` - Thư mục chứa mã nguồn đã được build
- `database/` - Thư mục chứa các file SQL để cài đặt cơ sở dữ liệu
  - `db_setup.sql` - Script tạo cấu trúc bảng
  - `db_sample_data.sql` - Script thêm dữ liệu mẫu
- `.htaccess` - Cấu hình Apache cho routing và bảo mật
- `.env.example` - File mẫu cho cấu hình môi trường
- `DEPLOY.md` - Hướng dẫn nhanh để triển khai
- `HƯỚNG_DẪN_TRIỂN_KHAI.md` - Hướng dẫn chi tiết về cách triển khai
- `HƯỚNG_DẪN_QUẢN_TRỊ.md` - Hướng dẫn sử dụng trang quản trị
- `HƯỚNG_DẪN_CHUYỂN_ĐỔI_DATABASE.md` - Hướng dẫn chuyển đổi cơ sở dữ liệu
- `package.json` - Cấu hình dependencies và script chạy ứng dụng

## HƯỚNG DẪN NHANH

### TRIỂN KHAI

1. **Giải nén package** vào thư mục gốc của hosting (public_html hoặc www)
2. **Tạo cơ sở dữ liệu** và import file từ thư mục `database/`
3. **Tạo file `.env`** dựa trên `.env.example` và điền thông tin cấu hình
4. **Cài đặt dependencies**: Nếu hosting hỗ trợ Node.js, chạy `npm install --production`
5. **Khởi động ứng dụng**: Sử dụng PM2 hoặc dịch vụ tương tự

### ĐĂNG NHẬP QUẢN TRỊ

- URL: `https://yourdomain.com/admin/login`
- Username: `admin`
- Password: `admin123`

**Lưu ý quan trọng**: Hãy thay đổi mật khẩu mặc định ngay sau khi đăng nhập lần đầu!

## TÀI LIỆU CHI TIẾT

Tham khảo các file hướng dẫn đi kèm để biết thêm chi tiết về cách triển khai và quản trị trang web.

## HỖ TRỢ

Nếu gặp vấn đề trong quá trình triển khai, vui lòng liên hệ:
- Email: support@ecolife.vn
- Điện thoại: 0987654321

