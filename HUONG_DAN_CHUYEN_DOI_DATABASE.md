# HƯỚNG DẪN CHUYỂN ĐỔI TỪ MEMSTORAGE SANG POSTGRESQL

Tài liệu này hướng dẫn chuyển đổi từ lưu trữ trong bộ nhớ (MemStorage) sang cơ sở dữ liệu PostgreSQL (DatabaseStorage) cho trang web Ecolife.

## 1. CHUẨN BỊ

### Cài đặt PostgreSQL

1. Nếu chưa có cơ sở dữ liệu PostgreSQL, hãy thực hiện tạo một cơ sở dữ liệu mới:
   - Đăng ký tài khoản tại một dịch vụ lưu trữ PostgreSQL như [Neon](https://neon.tech), [ElephantSQL](https://www.elephantsql.com/) hoặc [Supabase](https://supabase.com/)
   - Hoặc cài đặt PostgreSQL trực tiếp trên máy chủ của bạn

2. Lấy thông tin kết nối cơ sở dữ liệu gồm:
   - Connection string: `postgresql://username:password@host:port/database`
   - Hoặc các thông tin riêng lẻ: hostname, port, tên database, username, password

### Cập nhật biến môi trường

1. Thêm biến môi trường `DATABASE_URL` vào file `.env`:
   ```
   DATABASE_URL=postgresql://username:password@host:port/database
   ```

2. Hoặc cài đặt các biến riêng lẻ:
   ```
   PGHOST=host
   PGPORT=port
   PGDATABASE=database
   PGUSER=username
   PGPASSWORD=password
   ```

## 2. TRIỂN KHAI MIGRATION

### Bước 1: Tạo schema cơ sở dữ liệu 

File `shared/schema.ts` đã được cấu hình đầy đủ các bảng và quan hệ. Sử dụng Drizzle Kit để tạo các bảng trong cơ sở dữ liệu PostgreSQL:

```bash
npx drizzle-kit push:pg
```

### Bước 2: Chuyển đổi dữ liệu (nếu cần)

Nếu bạn cần chuyển đổi dữ liệu từ MemStorage sang PostgreSQL, hãy thực hiện các bước sau:

1. Xuất dữ liệu từ MemStorage (lưu ý: hiện tại không có chức năng xuất dữ liệu mặc định, bạn cần thêm chức năng này)

2. Sử dụng mẫu dữ liệu có sẵn trong file `db_sample_data.sql` để nhập dữ liệu vào PostgreSQL:
   - Điều chỉnh syntax từ MySQL sang PostgreSQL nếu cần
   - Thực hiện script SQL bằng lệnh `psql` hoặc công cụ quản trị PostgreSQL

## 3. CHUYỂN ĐỔI STORAGE INTERFACE

### Bước 1: Bật DatabaseStorage

Mở file `server/storage.ts` và thay đổi export ở cuối file từ:

```typescript
export const storage = new MemStorage();
```

Sang:

```typescript
export const storage = new DatabaseStorage();
```

### Bước 2: Kiểm tra và điều chỉnh DatabaseStorage (nếu cần)

Lớp DatabaseStorage đã được triển khai trong file `server/storage.ts`, nhưng bạn cần kiểm tra lại để đảm bảo tất cả các phương thức đều hoạt động chính xác.

Ví dụ, đây là cách triển khai một số phương thức quan trọng:

```typescript
export class DatabaseStorage implements IStorage {
  // Users
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Projects
  async getAllProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(desc(projects.createdAt));
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project || undefined;
  }

  // ...các phương thức khác
}
```

### Bước 3: Kiểm tra kết nối cơ sở dữ liệu

Trước khi khởi động lại ứng dụng, hãy kiểm tra kết nối cơ sở dữ liệu:

```typescript
// Thêm vào file server/db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '@shared/schema';

// Kiểm tra xem có biến môi trường DATABASE_URL không
if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set');
  process.exit(1);
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Kiểm tra kết nối
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
    process.exit(1);
  }
  console.log('Connected to the database');
  release();
});

export const db = drizzle(pool, { schema });
```

## 4. KHỞI ĐỘNG LẠI ỨNG DỤNG

Sau khi hoàn thành các bước trên, khởi động lại ứng dụng:

```bash
npm run dev
```

## 5. XỬ LÝ SỰ CỐ

### Sự cố kết nối

Nếu gặp lỗi kết nối, hãy kiểm tra:
- Chuỗi kết nối `DATABASE_URL` có chính xác không
- Firewall hoặc VPC có cho phép kết nối từ máy chủ của bạn đến cơ sở dữ liệu không
- Người dùng cơ sở dữ liệu có quyền truy cập đầy đủ không

### Sự cố migration

Nếu gặp lỗi khi tạo bảng:
- Kiểm tra lại định nghĩa schema trong `shared/schema.ts`
- Xem logs chi tiết từ `drizzle-kit`
- Xóa các bảng đã tạo (nếu cần) và thử lại từ đầu

### Sự cố dữ liệu

Nếu dữ liệu không hiển thị hoặc không lưu được:
- Kiểm tra xem các phương thức trong `DatabaseStorage` có đúng không
- Kiểm tra trình tự các câu lệnh SQL có đúng không (ví dụ: cần insert các bản ghi parent trước khi insert các bản ghi child có foreign key)

## 6. QUAY LẠI MEMSTORAGE (NẾU CẦN)

Nếu bạn cần quay lại sử dụng MemStorage, chỉ cần thay đổi export trong file `server/storage.ts`:

```typescript
export const storage = new MemStorage();
```

## 7. TÀI LIỆU THAM KHẢO

- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Node-Postgres Documentation](https://node-postgres.com/)

---

**Lưu ý**: Hãy luôn sao lưu dữ liệu trước khi thực hiện bất kỳ thay đổi lớn nào với cơ sở dữ liệu.