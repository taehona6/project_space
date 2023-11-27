<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri= "http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>Hello my First JSP World!</h1>

<form action="/memb/login" method="post">
	ID : <input type="text" name="id" placeholder="ID"><br>
	PW : <input type="password" name="pwd" placeholder="PW"><br>
	<button type="submit">login</button>
</form>
<div>
	<c:if test="${ses.id ne null }">
	${ses.id} 님이 login 하셨습니다. <br>
	계정생성일 : ${ses.regdate }<br>
	마지막접속 : ${ses.lastlogin }<br>
	<a href="#"><button>회원정보수정</button></a>
	<a href="#"><button>회원리스트</button></a>
	<a href="memb/logout"><button>로그아웃</button></a>
	<a href="/brd/register"><button>글쓰기 페이지로 이동</button></a>
	</c:if>
</div>
<br>
<hr>
<br>
<a href="/memb/join"><button>회원가입</button></a>



<a href="/brd/register"><button>글쓰기 페이지로 이동</button></a>
<a href="/brd/list"><button>게시판 리스트로 이동</button></a>
<script type="text/javascript">
	const msg_login = `<c:out value="${msg_login}" />`;
	console.log(msg_login);
	if(msg_login == '-1'){
		alert ('로그인 정보가 일치하지 않습니다');
	}
</script>


</body>
</html>