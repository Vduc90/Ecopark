# HƯỚNG DẪN SỬ DỤNG TRANG QUẢN TRỊ ECOLIFE

## THÔNG TIN ĐĂNG NHẬP
- **URL truy cập:** https://yourdomain.com/admin/login
- **Tài khoản mặc định:**
  - Username: `admin`
  - Password: `admin123`
- **Lưu ý quan trọng:** Vui lòng thay đổi mật khẩu mặc định ngay sau khi đăng nhập lần đầu để đảm bảo an toàn.

## TỔNG QUAN TRANG QUẢN TRỊ

### 1. DASHBOARD
- Hiển thị thông tin tổng quan về trang web:
  - Số lượng dự án
  - Số lượng tin tức
  - Số liên hệ mới chưa xử lý
  - Lượt truy cập gần đây
  - Thống kê người dùng

### 2. QUẢN LÝ DỰ ÁN
- **Danh sách dự án:** Hiển thị tất cả các dự án bất động sản
- **Thêm dự án mới:** Tạo dự án mới với các thông tin:
  - Tiêu đề
  - Slug (URL thân thiện)
  - Mô tả ngắn
  - Nội dung chi tiết (sử dụng trình soạn thảo WYSIWYG)
  - Hình ảnh thu nhỏ
  - Danh mục
  - Tùy chọn nổi bật
  - Thông tin SEO

#### Thông tin chi tiết dự án:
- **Tab Thông tin cơ bản:**
  - Tiêu đề, mô tả, nội dung
  - Hình ảnh chính
  - Danh mục, trạng thái
- **Tab Thông tin bất động sản:**
  - Diện tích
  - Số phòng ngủ
  - Vị trí
  - Giá bán/thuê
  - Loại hình
  - Tiện ích
- **Tab SEO:**
  - Meta title
  - Meta description
  - Meta keywords
  - Canonical URL
  - Open Graph image

### 3. QUẢN LÝ TIN TỨC
- **Danh sách tin tức:** Hiển thị tất cả bài viết
- **Thêm tin tức mới:** Tạo bài viết mới với các thông tin:
  - Tiêu đề
  - Slug (URL thân thiện)
  - Tóm tắt
  - Nội dung đầy đủ (sử dụng trình soạn thảo WYSIWYG)
  - Hình ảnh thu nhỏ
  - Thông tin SEO

### 4. QUẢN LÝ SLIDES
Quản lý các slide hiển thị trên trang chủ:
- Tiêu đề
- Mô tả
- Hình ảnh (khuyến nghị kích thước 1920x800px)
- Nút kêu gọi hành động (CTA)
- Thứ tự hiển thị

### 5. QUẢN LÝ TIỆN ÍCH
Quản lý danh sách tiện ích của dự án:
- Tiêu đề
- Mô tả
- Hình ảnh minh họa
- Thứ tự hiển thị

### 6. QUẢN LÝ LIÊN HỆ
- Xem danh sách liên hệ từ khách hàng
- Trả lời email cho khách hàng
- Xóa các liên hệ không cần thiết

### 7. PHÂN TÍCH DỮ LIỆU
Hiển thị các thống kê và phân tích về:
- Lượt truy cập trang web
- Trang được xem nhiều nhất
- Thời gian trên trang
- Tỷ lệ thoát
- Nguồn lưu lượng truy cập

### 8. CÀI ĐẶT TRANG WEB
Quản lý các cài đặt chung của trang web:
- Logo công ty
- Tên công ty
- Địa chỉ
- Số điện thoại
- Email
- Liên kết mạng xã hội
- Cấu hình email thông báo

### 9. CÀI ĐẶT SEO
Quản lý các cài đặt SEO mặc định:
- Meta title mặc định
- Meta description mặc định
- Meta keywords mặc định
- Open Graph image mặc định
- Google Analytics ID
- Google Tag Manager ID

### 10. QUẢN LÝ MENU
Quản lý cấu trúc menu của trang web:
- Tạo menu mới
- Sắp xếp thứ tự menu
- Tạo menu con (submenu)
- Kích hoạt/vô hiệu hóa các menu
- Cài đặt hiển thị trên trang chủ với hình ảnh và mô tả

## HƯỚNG DẪN CHI TIẾT

### CÁCH THÊM DỰ ÁN MỚI
1. Từ menu trái, chọn "Dự án" > "Thêm mới"
2. Điền đầy đủ thông tin vào form:
   - **Tiêu đề:** Tên dự án (ví dụ: Swanlake Residences)
   - **Slug:** URL thân thiện (tự động tạo từ tiêu đề hoặc tùy chỉnh)
   - **Mô tả:** Mô tả ngắn gọn về dự án (150-200 từ)
   - **Nội dung:** Chi tiết đầy đủ về dự án
   - **Hình ảnh thu nhỏ:** Hình ảnh đại diện cho dự án (khuyến nghị tỷ lệ 16:9)
   - **Danh mục:** Chọn danh mục phù hợp (Căn hộ, Biệt thự, Nhà phố, Nghỉ dưỡng)
   - **Nổi bật:** Tích chọn nếu muốn dự án xuất hiện trong mục "Dự án nổi bật"
3. Trong tab "Thông tin bất động sản":
   - Điền thông tin về diện tích, số phòng ngủ, vị trí, giá bán, loại hình
   - Chọn các tiện ích có trong dự án
4. Trong tab "SEO":
   - Điền thông tin Meta title, Meta description, Meta keywords
   - Tải lên hình ảnh Open Graph nếu muốn tùy chỉnh
5. Nhấn "Lưu" để hoàn tất

### CÁCH TẠO MENU MỚI
1. Từ menu trái, chọn "Menu" > "Danh sách menu"
2. Nhấn nút "Thêm mới"
3. Điền thông tin menu:
   - **Tiêu đề:** Tên hiển thị của menu
   - **URL:** Đường dẫn đến trang (ví dụ: /gioi-thieu, /du-an)
   - **Thứ tự:** Vị trí của menu (số nhỏ hơn hiển thị trước)
   - **Kích hoạt:** Tích chọn để hiển thị menu trên trang web
   - **Menu cha:** Chọn menu cha nếu đây là menu con
   - **Hiển thị trên trang chủ:** Tích chọn nếu muốn hiển thị nội dung menu trên trang chủ
4. Nếu hiển thị trên trang chủ, điền thêm:
   - **Hình ảnh:** Tải lên hình ảnh đại diện
   - **Tiêu đề hiển thị:** Tiêu đề lớn hiển thị trên trang chủ
   - **Mô tả ngắn:** Mô tả ngắn gọn hiển thị dưới tiêu đề
   - **Nội dung:** Nội dung chi tiết hiển thị khi người dùng click vào
5. Nhấn "Lưu" để hoàn tất

### CÁCH CẤU HÌNH SEO
1. Từ menu trái, chọn "Cài đặt" > "Cài đặt SEO"
2. Điền thông tin SEO mặc định:
   - **Meta title mặc định:** Tiêu đề mặc định cho các trang chưa cấu hình SEO riêng
   - **Meta description mặc định:** Mô tả mặc định
   - **Meta keywords mặc định:** Từ khóa mặc định
   - **Open Graph image mặc định:** Hình ảnh chia sẻ mặc định
3. Cấu hình Google Analytics và Google Tag Manager:
   - **Google Analytics ID:** Nhập ID theo định dạng UA-XXXXXXXXX-X
   - **Google Tag Manager ID:** Nhập ID theo định dạng GTM-XXXXXXX
4. Nhấn "Lưu thay đổi" để hoàn tất

### CÁCH CẤU HÌNH EMAIL
1. Từ menu trái, chọn "Cài đặt" > "Cài đặt trang web"
2. Cuộn xuống phần "Cấu hình Email":
   - **SMTP Host:** Máy chủ SMTP (ví dụ: smtp.gmail.com)
   - **SMTP Port:** Cổng SMTP (thường là 587 hoặc 465)
   - **SMTP Secure:** Tích chọn nếu sử dụng SSL/TLS
   - **SMTP User:** Địa chỉ email gửi
   - **SMTP Password:** Mật khẩu email hoặc mật khẩu ứng dụng
   - **Email nhận thông báo:** Email sẽ nhận thông báo khi có liên hệ mới
3. Nhấn "Kiểm tra kết nối" để xác minh cấu hình email hoạt động
4. Nhấn "Lưu thay đổi" để hoàn tất

## MẸO SỬ DỤNG
1. **Quản lý hình ảnh hiệu quả:**
   - Tối ưu hình ảnh trước khi tải lên (nén, đúng kích thước)
   - Đặt tên có ý nghĩa cho hình ảnh
   - Luôn điền thẻ alt để tối ưu SEO

2. **Nội dung chất lượng:**
   - Sử dụng tiêu đề H2, H3 để phân cấp nội dung
   - Thêm hình ảnh minh họa vào nội dung
   - Kiểm tra chính tả trước khi đăng

3. **Tối ưu SEO:**
   - Sử dụng từ khóa chính trong tiêu đề, URL và nội dung
   - Viết meta description hấp dẫn, có chứa từ khóa
   - Cập nhật canonical URL để tránh nội dung trùng lặp

4. **Bảo mật:**
   - Thay đổi mật khẩu thường xuyên
   - Đăng xuất khi không sử dụng
   - Không chia sẻ thông tin đăng nhập

## XỬ LÝ SỰ CỐ

### KHÔNG TẢI ĐƯỢC HÌNH ẢNH
1. Kiểm tra kích thước file (không vượt quá 5MB)
2. Đảm bảo định dạng file hợp lệ (JPG, PNG, GIF, WEBP)
3. Kiểm tra quyền ghi vào thư mục uploads

### KHÔNG GỬI ĐƯỢC EMAIL
1. Xác minh thông tin SMTP chính xác
2. Kiểm tra tường lửa hoặc hạn chế từ nhà cung cấp email
3. Với Gmail, đảm bảo đã bật "Quyền truy cập của ứng dụng kém an toàn" hoặc sử dụng mật khẩu ứng dụng

### TRANG WEB HIỂN THỊ LỖI
1. Kiểm tra logs để tìm nguyên nhân
2. Đảm bảo cơ sở dữ liệu hoạt động bình thường
3. Kiểm tra kết nối internet

## LIÊN HỆ HỖ TRỢ

Nếu cần hỗ trợ thêm, vui lòng liên hệ:
- **Email hỗ trợ:** support@ecolife.vn
- **Điện thoại:** 0987654321
- **Giờ làm việc:** Thứ 2 - Thứ 6, 9:00 - 17:00