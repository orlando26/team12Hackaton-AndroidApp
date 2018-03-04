package com.jsftemplate.utils;

import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.jsftemplate.db.RmaUser;


public class SessionUtils {
	public static HttpSession getSession() {
		return (HttpSession) FacesContext.getCurrentInstance()
				.getExternalContext().getSession(false);
	}
	
	public static void setUserLogged(RmaUser user){
		HttpSession session = (HttpSession) FacesContext.getCurrentInstance()
		.getExternalContext().getSession(true);
		session.setAttribute("user", user);
	}

	public static HttpServletRequest getRequest() {
		return (HttpServletRequest) FacesContext.getCurrentInstance()
				.getExternalContext().getRequest();
	}

	public static RmaUser getUser() {
		HttpSession session = (HttpSession) FacesContext.getCurrentInstance()
				.getExternalContext().getSession(false);
		return (RmaUser)session.getAttribute("user");
	}
	
	public static boolean isValid(){
		if(getUser() == null){
			return false;
		}
		return true;
	}
}