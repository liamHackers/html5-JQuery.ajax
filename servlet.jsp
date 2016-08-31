<%@ page contentType="text/html;charset=UTF-8" language="java" import="java.lang.*" %>
<%@ page import="com.alibaba.fastjson.JSONObject" %>
<%
    String number = request.getParameter("stu_number_display");
    String name = request.getParameter("stu_name_display");
    String sex = request.getParameter("stu_sex_display_value");
    String phone = request.getParameter("stu_phone_display");
    String email = request.getParameter("stu_email_display");
    String age = request.getParameter("stu_age_display");
    String born = request.getParameter("stu_born_display");
    String mclass = request.getParameter("stu_class_display");
    String badminton = request.getParameter("undo_badminton_display");
    String football = request.getParameter("undo_football_display");
    String basketball = request.getParameter("undo_basketball_display");


    JSONObject jsonObject = new JSONObject();
    jsonObject.put("stu_mnumber",number);
    jsonObject.put("stu_mname",name);
    jsonObject.put("stu_msex",sex);
    jsonObject.put("stu_mphone",phone);
    jsonObject.put("stu_memail",email);
    jsonObject.put("stu_mage",age);
    jsonObject.put("stu_mborn",born);
    jsonObject.put("stu_mclass",mclass);
    jsonObject.put("stu_mbadminton",badminton);
    jsonObject.put("stu_mfootball",football);
    jsonObject.put("stu_mbasketball",basketball);
    response.setContentType("text/html;charset=UTF-8");
    String rtn = jsonObject.toString();
    java.io.PrintWriter p = response.getWriter();
    p.write(rtn);
    p.close();
    System.out.print(rtn);
%>