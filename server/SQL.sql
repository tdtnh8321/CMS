﻿use CMS
go
create or alter proc loginUser 
@email nvarchar(max),
@password nvarchar(max)
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
@idAccount nvarchar(max),
@password nvarchar(max)
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

create or alter proc getAllMenu
as
begin
		select * from Menus
end

exec getAllMenu

create or alter proc createMenu
@menuId nvarchar(max),
@name nvarchar(max),
@title nvarchar(max),
@icon nvarchar(max),
@description nvarchar(max),
@parentIId nvarchar(max),
@link nvarchar(max),
@creationTime datetime,
@order int,
@requiredPermissionId nvarchar(max),
@creatorUserId nvarchar(max),
@isParent int,
@menuColor nvarchar(max),
@isActive int,
@iconColor nvarchar(max)
as
begin
	insert into Menus(MenuId,Name,Title,Icon,Description,ParentId,Link,CreationTime,[Order],RequiredPermissionId,CreatorUserId,IsParent,MenuColor,IsActive,IconColor) values(@menuId,@name,@title,@icon,@description,@parentIId,@link,@creationTime,@order,@requiredPermissionId,@creatorUserId,@isParent,@menuColor,@isActive,@iconColor)
	select N'Them Menu thanh cong' as msg
end
--chay thu
