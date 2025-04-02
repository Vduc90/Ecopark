-- Sử dụng cơ sở dữ liệu
USE ecopark;

-- Thêm dữ liệu mẫu cho users
INSERT INTO users (username, password_hash, name, email)
VALUES
('admin', '$2a$10$S4YQh3xX1VJUmxS7hcJLXeRWGJ1ZUBZjKKQrNSYIkbWvFQY.aCGIi', 'Admin User', 'admin@ecopalacedaklak.city'); -- Password: VanDuc@2612@

-- Thêm dữ liệu mẫu cho slides
INSERT INTO slides (title, description, image_url, button_text, button_link, `order`)
VALUES
('Swanlake Residences', 'Không gian sống xanh đẳng cấp bên hồ thiên nga', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80', 'KHÁM PHÁ NGAY', '/du-an/swanlake-residences', 1),
('Marina Bay Villas', 'Biệt thự nghỉ dưỡng view biển tuyệt đẹp', 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80', 'KHÁM PHÁ NGAY', '/du-an/marina-bay-villas', 2),
('Sky Oasis Apartments', 'Căn hộ cao cấp giữa lòng phố thị', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80', 'KHÁM PHÁ NGAY', '/du-an/sky-oasis-apartments', 3);

-- Thêm dữ liệu mẫu cho projects
INSERT INTO projects (title, slug, description, content, thumbnail_url, category, is_featured, meta_title, meta_description, meta_keywords, og_image, canonical_url)
VALUES
('Swanlake Residences', 'swanlake-residences', 
'Biệt thự ven hồ Swanlake Residences là dự án biệt thự đơn lập cao cấp mang phong cách kiến trúc hiện đại, nằm ven hồ thiên nga tự nhiên rộng lớn. Không gian sống nơi đây được thiết kế để mang đến sự hài hòa giữa cuộc sống và thiên nhiên, đảm bảo mọi thành viên trong gia đình đều có không gian riêng tư và thoải mái. Với diện tích từ 300-500m², mỗi căn biệt thự đều có 4-6 phòng ngủ, phù hợp cho cả gia đình đa thế hệ. Các tiện ích xung quanh bao gồm công viên, sân chơi trẻ em, khu BBQ, và đường dạo bộ ven hồ.',
'<p>Biệt thự ven hồ Swanlake Residences là dự án biệt thự đơn lập cao cấp mang phong cách kiến trúc hiện đại, nằm ven hồ thiên nga tự nhiên rộng lớn. Không gian sống nơi đây được thiết kế để mang đến sự hài hòa giữa cuộc sống và thiên nhiên, đảm bảo mọi thành viên trong gia đình đều có không gian riêng tư và thoải mái.</p><p>Với diện tích từ 300-500m², mỗi căn biệt thự đều có 4-6 phòng ngủ, phù hợp cho cả gia đình đa thế hệ. Các tiện ích xung quanh bao gồm công viên, sân chơi trẻ em, khu BBQ, và đường dạo bộ ven hồ.</p>',
'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'Biệt thự', 1,
'Swanlake Residences | Biệt thự ven hồ cao cấp',
'Biệt thự ven hồ với thiết kế hiện đại, không gian sống lý tưởng cho gia đình đa thế hệ',
'biệt thự, biệt thự ven hồ, không gian sống, thiết kế hiện đại, gia đình đa thế hệ',
'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'/du-an/swanlake-residences'),

('Marina Bay Villas', 'marina-bay-villas', 
'Marina Bay Villas là dự án biệt thự nghỉ dưỡng với tầm nhìn hướng biển tuyệt đẹp. Dự án được thiết kế theo phong cách kiến trúc Địa Trung Hải kết hợp với nét hiện đại, tạo nên không gian sống sang trọng và đẳng cấp. Mỗi căn biệt thự đều được trang bị nội thất cao cấp, hệ thống smart home tiên tiến và bể bơi riêng.',
'<p>Marina Bay Villas là dự án biệt thự nghỉ dưỡng với tầm nhìn hướng biển tuyệt đẹp. Dự án được thiết kế theo phong cách kiến trúc Địa Trung Hải kết hợp với nét hiện đại, tạo nên không gian sống sang trọng và đẳng cấp.</p><p>Mỗi căn biệt thự đều được trang bị nội thất cao cấp, hệ thống smart home tiên tiến và bể bơi riêng. Với diện tích từ 250-400m², Marina Bay Villas có từ 3-5 phòng ngủ, phù hợp cho cả gia đình và làm nơi nghỉ dưỡng lý tưởng. Cư dân tại đây được thừa hưởng hệ thống tiện ích đẳng cấp như bãi biển riêng, nhà hàng, spa, và câu lạc bộ thể thao biển.</p>',
'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'Biệt thự', 1,
'Marina Bay Villas | Biệt thự nghỉ dưỡng view biển',
'Biệt thự view biển với thiết kế sang trọng, nội thất cao cấp cùng hệ thống tiện ích đẳng cấp',
'biệt thự, view biển, nghỉ dưỡng, thiết kế sang trọng, tiện ích đẳng cấp',
'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'/du-an/marina-bay-villas'),

('Sky Oasis Apartments', 'sky-oasis-apartments', 
'Sky Oasis Apartments là dự án căn hộ cao cấp nằm tại vị trí đắc địa của thành phố, mang đến tầm nhìn panorama tuyệt đẹp. Tất cả các căn hộ đều được trang bị hệ thống smart home, sử dụng vật liệu cao cấp và thiết kế tối ưu không gian sống.',
'<p>Sky Oasis Apartments là dự án căn hộ cao cấp nằm tại vị trí đắc địa của thành phố, mang đến tầm nhìn panorama tuyệt đẹp. Tất cả các căn hộ đều được trang bị hệ thống smart home, sử dụng vật liệu cao cấp và thiết kế tối ưu không gian sống.</p><p>Với diện tích đa dạng từ 65-120m², Sky Oasis Apartments có các loại căn hộ từ 1-3 phòng ngủ, phù hợp cho cả gia đình trẻ và người độc thân thành đạt. Cư dân tại đây được thừa hưởng hệ thống tiện ích nội khu đẳng cấp 5 sao như hồ bơi vô cực trên tầng thượng, khu vực BBQ, phòng gym, spa, và khu vui chơi trẻ em.</p>',
'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'Căn hộ', 1,
'Sky Oasis Apartments | Căn hộ cao cấp tại trung tâm thành phố',
'Căn hộ thông minh với tầm nhìn panorama, tiện ích nội khu đẳng cấp 5 sao',
'căn hộ, căn hộ cao cấp, smart home, tiện ích 5 sao, tầm nhìn panorama',
'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'/du-an/sky-oasis-apartments');

-- Thêm dữ liệu mẫu cho news
INSERT INTO news (title, slug, summary, content, thumbnail_url, meta_title, meta_description, meta_keywords, og_image, canonical_url)
VALUES
('Khai trương khu biệt thự Swanlake Residences giai đoạn 2', 'khai-truong-swanlake-residences-giai-doan-2',
'Ecolife chính thức ra mắt giai đoạn 2 của dự án biệt thự Swanlake Residences với nhiều ưu đãi hấp dẫn dành cho khách hàng.',
'<p>Ecolife chính thức ra mắt giai đoạn 2 của dự án biệt thự Swanlake Residences với nhiều ưu đãi hấp dẫn dành cho khách hàng. Sự kiện khai trương đã diễn ra thành công tốt đẹp với sự tham gia của hơn 300 khách mời, trong đó có nhiều khách hàng tiềm năng và các đối tác chiến lược của công ty.</p><p>Giai đoạn 2 của Swanlake Residences bao gồm 50 căn biệt thự đơn lập với thiết kế hiện đại và sang trọng. Mỗi căn biệt thự đều có view hướng hồ tuyệt đẹp, không gian sống rộng rãi và thoáng đãng. Các căn biệt thự được hoàn thiện với vật liệu cao cấp và trang bị hệ thống smart home tiên tiến.</p><p>Đặc biệt, tại sự kiện khai trương, Ecolife đã công bố chính sách ưu đãi đặc biệt dành cho khách hàng đặt mua trong tháng 6 này: Chiết khấu lên đến 5% giá trị căn biệt thự, tặng gói nội thất trị giá 500 triệu đồng, và hỗ trợ lãi suất 0% trong 2 năm đầu.</p><p>"Chúng tôi rất tự hào khi ra mắt giai đoạn 2 của dự án Swanlake Residences. Đây là dự án tiêu biểu cho triết lý phát triển bền vững và hướng đến chất lượng sống cao cấp mà Ecolife luôn theo đuổi. Chúng tôi tin rằng, không chỉ là nơi để ở, Swanlake Residences còn là nơi để tận hưởng cuộc sống, là tài sản giá trị để lại cho các thế hệ sau," ông Nguyễn Văn Minh, Tổng Giám đốc Ecolife chia sẻ.</p><p>Theo kế hoạch, các căn biệt thự thuộc giai đoạn 2 sẽ được bàn giao cho khách hàng vào quý 2 năm 2024.</p>',
'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'Khai trương khu biệt thự Swanlake Residences giai đoạn 2',
'Ecolife chính thức ra mắt giai đoạn 2 của dự án biệt thự Swanlake Residences với nhiều ưu đãi hấp dẫn dành cho khách hàng.',
'Swanlake Residences, biệt thự, khai trương, giai đoạn 2, ưu đãi, Ecolife',
'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'/tin-tuc/khai-truong-swanlake-residences-giai-doan-2'),

('Sự kiện tri ân khách hàng "Ecolife Luxury Night"', 'su-kien-tri-an-khach-hang-ecolife-luxury-night',
'Chương trình dạ tiệc tri ân khách hàng được tổ chức tại khách sạn 5 sao với sự tham gia của hơn 200 khách mời.',
'<p>Chương trình dạ tiệc tri ân khách hàng "Ecolife Luxury Night" đã được tổ chức thành công tại khách sạn 5 sao Intercontinental Hanoi vào tối ngày 30/05/2023 với sự tham gia của hơn 200 khách mời là khách hàng thân thiết và đối tác của Ecolife.</p><p>Sự kiện là lời cảm ơn chân thành từ Ecolife gửi đến những khách hàng đã tin tưởng và lựa chọn các dự án của công ty trong thời gian qua. Đây cũng là dịp để Ecolife chia sẻ về định hướng phát triển và các dự án mới sắp ra mắt trong thời gian tới.</p><p>Trong khuôn khổ sự kiện, Ecolife đã tổ chức nhiều hoạt động thú vị như trình diễn thời trang, biểu diễn âm nhạc đẳng cấp, và đặc biệt là buổi đấu giá từ thiện với số tiền thu được sẽ được dùng để xây dựng trường học tại các vùng khó khăn.</p><p>"Thành công của Ecolife ngày hôm nay có được là nhờ sự tin tưởng và ủng hộ của quý khách hàng. Chúng tôi luôn trân trọng niềm tin đó và cam kết sẽ không ngừng nỗ lực để mang đến những sản phẩm và dịch vụ tốt nhất," bà Nguyễn Thị Lan, Phó Tổng Giám đốc Ecolife phát biểu tại sự kiện.</p><p>Sự kiện "Ecolife Luxury Night" không chỉ là dịp để Ecolife tri ân khách hàng mà còn là nơi gắn kết cộng đồng cư dân văn minh, hiện đại đã và đang sinh sống tại các dự án của Ecolife.</p>',
'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'Sự kiện tri ân khách hàng "Ecolife Luxury Night"',
'Chương trình dạ tiệc tri ân khách hàng được tổ chức tại khách sạn 5 sao với sự tham gia của hơn 200 khách mời.',
'Ecolife Luxury Night, tri ân khách hàng, dạ tiệc, sự kiện, Intercontinental Hanoi',
'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'/tin-tuc/su-kien-tri-an-khach-hang-ecolife-luxury-night'),

('Ecolife công bố chính sách hỗ trợ tài chính mới', 'ecolife-cong-bo-chinh-sach-ho-tro-tai-chinh-moi',
'Hợp tác cùng ngân hàng VPBank, Ecolife công bố gói hỗ trợ tài chính với lãi suất ưu đãi chỉ 6.8%/năm trong 2 năm đầu.',
'<p>Hợp tác cùng ngân hàng VPBank, Ecolife vừa công bố gói hỗ trợ tài chính mới với lãi suất ưu đãi chỉ 6.8%/năm trong 2 năm đầu dành cho khách hàng mua bất động sản tại các dự án của công ty.</p><p>Theo đó, khách hàng có thể vay tối đa lên đến 70% giá trị bất động sản với thời hạn vay linh hoạt từ 15 đến 25 năm. Đặc biệt, trong 2 năm đầu, lãi suất sẽ được cố định ở mức 6.8%/năm, sau đó sẽ điều chỉnh theo thị trường nhưng không vượt quá 11.5%/năm.</p><p>Bên cạnh đó, Ecolife còn áp dụng chính sách thanh toán linh hoạt, cho phép khách hàng chỉ cần thanh toán 30% giá trị bất động sản trong giai đoạn đầu, phần còn lại sẽ được thanh toán theo tiến độ với sự hỗ trợ từ ngân hàng.</p><p>"Chúng tôi hiểu rằng, việc mua bất động sản là quyết định tài chính lớn của mỗi gia đình. Vì vậy, thông qua việc hợp tác với các đối tác ngân hàng uy tín, Ecolife mong muốn giảm bớt gánh nặng tài chính cho khách hàng, giúp họ dễ dàng sở hữu ngôi nhà mơ ước," ông Trần Văn Hùng, Giám đốc Tài chính của Ecolife chia sẻ.</p><p>Chính sách hỗ trợ tài chính mới này sẽ được áp dụng cho tất cả các dự án đang mở bán của Ecolife, bao gồm Swanlake Residences, Marina Bay Villas và Sky Oasis Apartments.</p>',
'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'Ecolife công bố chính sách hỗ trợ tài chính mới',
'Hợp tác cùng ngân hàng VPBank, Ecolife công bố gói hỗ trợ tài chính với lãi suất ưu đãi chỉ 6.8%/năm trong 2 năm đầu.',
'Ecolife, chính sách tài chính, hỗ trợ vay, VPBank, bất động sản, lãi suất ưu đãi',
'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
'/tin-tuc/ecolife-cong-bo-chinh-sach-ho-tro-tai-chinh-moi');

-- Thêm dữ liệu mẫu cho amenities
INSERT INTO amenities (title, description, icon, `order`)
VALUES
('Công viên xanh', 'Hệ thống công viên rộng lớn với cảnh quan được thiết kế tinh tế, mang đến không gian thư giãn lý tưởng.', 'tree', 1),
('Hồ bơi vô cực', 'Hồ bơi vô cực với tầm nhìn panorama, đạt chuẩn Olympic cùng hệ thống làm sạch nước hiện đại.', 'swimming-pool', 2),
('Fitness Center', 'Trung tâm thể dục thể thao hiện đại với đầy đủ trang thiết bị và huấn luyện viên chuyên nghiệp.', 'dumbbell', 3),
('Nhà hàng & Café', 'Chuỗi nhà hàng và café cao cấp phục vụ ẩm thực đa dạng từ Á đến Âu, đáp ứng mọi nhu cầu.', 'utensils', 4);

-- Thêm dữ liệu mẫu cho site_settings
INSERT INTO site_settings (site_name, logo_url, contact_email, contact_phone, address, facebook_url, youtube_url, zalo_url,
                        office_address, office_district, office_city, office_phone, office_phone2, office_email,
                        google_map_url, google_map_lat, google_map_lng, google_map_zoom,
                        company_name, phone, email, instagram_url,
                        default_meta_title, default_meta_description, default_meta_keywords, sitemap_enabled)
VALUES
('Ecolife', 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
'info@ecolife.vn', '0912345678', 'Số 1 Đường Trần Duy Hưng, Hà Nội',
'https://facebook.com/ecolife', 'https://youtube.com/ecolife', 'https://zalo.me/ecolife',
'Tòa nhà Hanoi Lake View', '28 Đường Thanh Niên, Tây Hồ', 'Hà Nội',
'+84 24 3936 3940', '+84 24 3 678 6316', 'info@ecolife.vn',
'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9265586948147!2d105.81684797556554!3d21.04587828062324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf89bd7%3A0xd94a869b494c04b6!2zMjggxJDGsOG7nW5nIFRoYW5oIE5pw6puLCBUw6J5IEjhu5MsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1712123456789!5m2!1svi!2s',
'21.045878', '105.816848', '15',
'Công ty Cổ phần Bất động sản Ecolife', '0912345678', 'info@ecolife.vn', 'https://instagram.com/ecolife',
'Ecolife - Nền tảng bất động sản thông minh', 
'Ecolife cung cấp giải pháp tra cứu và tìm kiếm bất động sản toàn diện, với các dự án chất lượng cao và dịch vụ hỗ trợ khách hàng chuyên nghiệp.',
'bất động sản, dự án xanh, căn hộ cao cấp, biệt thự, nhà phố', 1);

-- Thêm dữ liệu mẫu cho menus
INSERT INTO menus (title, url, `order`, is_active)
VALUES
('Trang chủ', '/', 1, 1);

-- Tạo menu chính và lấy ID
INSERT INTO menus (title, url, `order`, is_active)
VALUES
('Dự án', '/du-an', 2, 1);

-- Lấy ID của menu vừa tạo
SET @du_an_id = LAST_INSERT_ID();

-- Thêm menu con cho DỰ ÁN
INSERT INTO menus (title, url, `order`, parent_id, is_active)
VALUES
('Căn hộ', '/du-an/can-ho', 1, @du_an_id, 1),
('Shophouse', '/du-an/shophouse', 2, @du_an_id, 1),
('Nhà vườn', '/du-an/nha-vuon', 3, @du_an_id, 1),
('Biệt thự', '/du-an/biet-thu', 4, @du_an_id, 1),
('NOXH', '/du-an/noxh', 5, @du_an_id, 1);

-- Thêm menu VỊ TRÍ với nội dung hiển thị trên trang chủ
INSERT INTO menus (title, url, `order`, is_active, show_on_homepage, home_image, home_title, home_description, home_content)
VALUES
('VỊ TRÍ', '/vi-tri', 3, 1, 1, 
'https://images.unsplash.com/photo-1624480474543-08ec6db981d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
'VỊ TRÍ ĐẮC ĐỊA',
'Tọa lạc tại vị trí đắc địa, kết nối thuận tiện với các trung tâm thương mại, giáo dục và y tế',
'<p>Ecolife tọa lạc tại vị trí đắc địa, nằm ở trung tâm của thành phố với khả năng kết nối thuận tiện đến các khu vực quan trọng.</p><p>Từ dự án, cư dân chỉ mất:</p><ul><li>5 phút đến Trung tâm thương mại Aeon Mall</li><li>10 phút đến Công viên Yên Sở</li><li>15 phút đến trung tâm thành phố</li><li>20 phút đến sân bay Nội Bài</li></ul><p>Đây là vị trí lý tưởng cho những ai muốn tận hưởng không gian sống yên tĩnh nhưng vẫn dễ dàng kết nối với nhịp sống năng động của đô thị.</p>');

-- Lấy ID của menu VỊ TRÍ
SET @vi_tri_id = LAST_INSERT_ID();

-- Thêm menu con cho VỊ TRÍ
INSERT INTO menus (title, url, `order`, parent_id, is_active)
VALUES
('Vị trí tổng quan', '/vi-tri/tong-quan', 1, @vi_tri_id, 1),
('Bản đồ vệ tinh', '/vi-tri/ban-do-ve-tinh', 2, @vi_tri_id, 1);

-- Thêm các menu khác
INSERT INTO menus (title, url, `order`, is_active)
VALUES
('Tin tức', '/tin-tuc', 4, 1);

-- Thêm menu TIỆN ÍCH với nội dung hiển thị trên trang chủ
INSERT INTO menus (title, url, `order`, is_active, show_on_homepage, home_image, home_title, home_description, home_content)
VALUES
('Tiện ích', '/tien-ich', 5, 1, 1,
'https://images.unsplash.com/photo-1624206386316-846a61f55500?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
'TIỆN ÍCH ĐA DẠNG',
'Hệ thống tiện ích đẳng cấp 5 sao phục vụ mọi nhu cầu sinh hoạt, giải trí và thư giãn',
'<p>Ecolife cung cấp hệ thống tiện ích đa dạng và đẳng cấp, tạo nên không gian sống hoàn hảo cho cư dân:</p><ul><li>Công viên xanh với không gian thư giãn và tập luyện</li><li>Hồ bơi vô cực với tầm nhìn panorama</li><li>Trung tâm thể thao hiện đại với phòng gym và yoga</li><li>Khu vui chơi trẻ em an toàn và sáng tạo</li><li>Hệ thống nhà hàng và café sang trọng</li></ul><p>Mọi tiện ích đều được thiết kế và vận hành theo tiêu chuẩn 5 sao, đảm bảo trải nghiệm tốt nhất cho cư dân.</p>');

-- Thêm menu LIÊN HỆ
INSERT INTO menus (title, url, `order`, is_active)
VALUES
('Liên hệ', '/lien-he', 6, 1);