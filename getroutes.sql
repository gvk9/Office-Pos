USE [empdb]
GO
/****** Object:  StoredProcedure [dbo].[getscreens]    Script Date: 2/21/2022 8:31:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[getroutes] 
	-- Add the parameters for the stored procedure here
	@uid nvarchar(50)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	 
    -- Insert statements for procedure here
	SELECT path,component from routes where rid in
	 (select routeid from accessroutes where raccess=
	 (select roleid from roles where role=
	 (select empdesig from emp where empcode=
	 (select empcode from loginusers where username=@uid ))))
END
