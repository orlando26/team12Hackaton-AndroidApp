package com.jsftemplate.model;

import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.Session;

import com.jsftemplate.db.RmaUser;
import com.jsftemplate.hibernate.HibernateSession;
import com.jsftemplate.hibernate.SQL;

public class RmaUserModel {
	@SuppressWarnings("unchecked")
	public static RmaUser findByUserName(String userName){
		Session session = HibernateSession.getSession();
		session.beginTransaction();
		SQLQuery query = SQL.getQueryByEntity(session, RmaUser.class, "findByUserName");
		query.setParameter("userName", userName);
		List<RmaUser> list = query.list();
		session.close();
		RmaUser user;
		try{
			user =  list.get(0);
		}catch(IndexOutOfBoundsException e){
			user = null;
		}
		return user;
	}
}
