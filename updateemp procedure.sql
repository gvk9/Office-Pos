USE [empdb]
GO
/****** Object:  StoredProcedure [dbo].[Updatesprocedure]    Script Date: 12/2/2021 3:33:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[Updatesprocedure]
	-- Add the parameters for the stored procedure here
	 @empid   int  ,
	 @empname   nchar (20)  ,
	 @empcode   nchar (10)  ,
	 @empdesig   nchar (10)  ,
	 @empdept   nchar (10)  ,
	 @empjoindate   date   ,
	 @empgender   nchar (1)  ,
	 @empbasicamount   float   
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	UPDATE  dbo.emp 
   SET  empname  = @empname
      , empcode  = @empcode
      , empdesig  = @empdesig
      , empdept  = @empdept
      , empjoindate  = @empjoindate
      , empgender  = @empgender
      , empbasicamount  = @empbasicamount 
 WHERE empid=@empid
END
