USE [empdb]
GO
/****** Object:  StoredProcedure [dbo].[Saveprocedure]    Script Date: 12/1/2021 10:01:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[Saveprocedure]
	-- Add the parameters for the stored procedure here
	
	@deptname nchar(20)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	insert into dbo.dept (deptname) values(@deptname)
END
