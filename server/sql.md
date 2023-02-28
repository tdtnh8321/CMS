create or alter proc loginUser
@email nvarchar(50),
@password nvarchar(50)
as
begin
Select \* from Users where email=@email and password=@password
end
exec loginUser'admina@gmail.com', '123'
