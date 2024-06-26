USE [empdb]
GO
/****** Object:  StoredProcedure [dbo].[posttimesheetpro]    Script Date: 2/24/2022 10:29:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[posttimesheetpro]
@empname nchar(50),
@empcode nvarchar(10),
@hours smallint,
@date date,
@leavetype nchar(50),
@comments nvarchar(500),
@updatedby nchar(50)
 
AS


BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	DECLARE @updateddate date;
	SET @updateddate=GETDATE();

    -- Insert statements for procedure here
	 IF EXISTS((SELECT empcode FROM  dbo.timesheet where empcode=@empcode and date=@date))
	BEGIN
	PRINT 'already filled , updating . . .'
	 --insert update
	  UPDATE  dbo.timesheet SET empname=@empname, empcode=@empcode,hours=@hours,date=@date,leavetype=@leavetype,comments= @comments,updatedby= @updatedby,updateddate=@updateddate WHERE empcode=@empcode and date=@date
	 
	  
	  END
	   
	 ELSE
	 BEGIN
	 PRINT 'inserting '
	  INSERT INTO dbo.timesheet(empname,empcode,hours,date,leavetype,comments,updatedby,updateddate) 
	  values (@empname,@empcode,@hours,@date, @leavetype, @comments, @updatedby,@updateddate)
	  
	  END
	 
END
