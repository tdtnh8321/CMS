use CMS
go
create or alter proc loginUser 
@email nvarchar(50),
@password nvarchar(50)
as
begin
	if exists(Select * from Users where email=@email and password=@password)
	begin
		Select * from Users where email=@email and password=@password
	end
	else 
	begin
		select N'Khong tim thay' as msg
	end
end
exec loginUser'admina@gmail.com', '1234'

create or alter proc changePassword
@idAccount nvarchar(50),
@password nvarchar(50)
as
begin
	
	update Users set password = @password where _id = @idAccount
	if @@ROWCOUNT > 0
	begin
		select N'Cập nhật thành công' as msg
	end
	else 
	begin
		select N'Cập nhật thất bại' as msg
	end
	
end

exec changePassword '1', 'abc123'