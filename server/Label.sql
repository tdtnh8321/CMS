use CMS
go

create or alter proc getLabelsByMenuId
@menuId nvarchar(max)
as
begin
	if(exists(select * from Menus where MenuId=@menuId))
	begin
		if(exists(select * from Labels where MenuId=@menuId))
		begin
			select * from Labels where MenuId=@menuId
		end
			
	end
	else select N'Khong ton tai menuId' as msg
end

exec getLabelsByMenuId "abc"
