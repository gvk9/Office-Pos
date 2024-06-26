USE [empdb]
GO
/****** Object:  StoredProcedure [dbo].[SaveEmpprocedure]    Script Date: 2/3/2022 3:16:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,
-- Description:	<Description,,
-- =============================================
ALTER PROCEDURE [dbo].[SaveEmpprocedure]
	-- Add the parameters for the stored procedure here
	
 
	       @empname nchar(20),
           @empcode nvarchar(10),
           @empdesig nchar(10),
           @empdept nchar(10),
           @empjoindate date,
           @empgender nchar(10),
           @empbasicamount float,
           @address nvarchar(120),
           @city nchar(25),
           @state nchar(30),
           @zip nvarchar(8),
           @createdby nchar(20),
           @creationdate date,
           @lastmodified nchar(20) 
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
INSERT INTO [dbo].[emp]
           ([empname]
           ,[empcode]
           ,[empdesig]
           ,[empdept]
           ,[empjoindate]
           ,[empgender]
           ,[empbasicamount]
           ,[address]
           ,[city]
           ,[state]
           ,[zip]
           ,[createdby]
           ,[creationdate]
           ,[lastmodified])
     VALUES
           (@empname
           ,@empcode
           ,@empdesig
           ,@empdept
           ,@empjoindate 
           ,@empgender 
           ,@empbasicamount
		   ,@address
		   ,@city
		   ,@state
		   ,@zip
		   ,@createdby
		   ,@creationdate
		   ,@lastmodified)
 
END
