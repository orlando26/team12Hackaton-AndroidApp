findByUserName{
	select * from RMA_USER where USR_Email = :userName
}