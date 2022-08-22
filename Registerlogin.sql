USE [empdb]
GO
/****** Object:  StoredProcedure [dbo].[Registerlogin]    Script Date: 1/12/2022 1:21:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[Registerlogin] 
	@username nchar(10), @password nchar(10),@empcode nchar(10)
	
AS
BEGIN

	IF EXISTS((SELECT empcode FROM  dbo.emp where empcode=@empcode))
	BEGIN
	PRINT 'IN MAIN IF'
	 IF EXISTS((SELECT empcode FROM dbo.loginusers where empcode=@empcode))
	 PRINT 'USER EXIST'
	  
	 ELSE
	 BEGIN
	  PRINT 'inside else statement inserting user'
	  INSERT INTO dbo.loginusers(username,password,empcode) values(@username,@password,@empcode)
	  END
	  END
	 ELSE
	 PRINT 'MAIN IF FAILED NO EMP FOUND'
	 
END
