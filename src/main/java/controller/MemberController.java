package controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import domain.MemberVO;
import service.MemberService;
import service.MemberServiceImpl;

/**
 * Servlet implementation class MemberController
 */
@WebServlet("/memb/*")
public class MemberController extends HttpServlet {
	private static final long serialVersionUID = 1L;
    //로그객체
	private static final Logger log = LoggerFactory.getLogger(MemberController.class);
	//rdp
	private RequestDispatcher rdp;
	//destpage
	private String destPage;
	//isOk
	private int isOk;
	//service
	private MemberService msv;
	
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberController() {
        msv = new MemberServiceImpl();
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 모든 서비스 처리 경로
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html; charset=UTF-8");
		
		String uri = request.getRequestURI();
		String path = uri.substring(uri.lastIndexOf("/")+1);
		
		log.info(">>> path >>> " + path);
		
		
		switch(path) {
		case "join":
			//index의 /member/join 경로..
			destPage="/member/join.jsp";
			break;
			
		case "register":
			try {
				String id = request.getParameter("id");
				String pwd = request.getParameter("pwd");
				String email = request.getParameter("email");
				int age = Integer.parseInt(request.getParameter("age"));
				
				MemberVO mvo = new MemberVO(id,pwd,email,age);
				log.info(">>> join check 1 "+mvo);
				isOk = msv.register(mvo);
				log.info("join>> ", (isOk>0)? "Ok" : "Fail");
				destPage ="/index.jsp";
				
			}catch(Exception e) {
				e.printStackTrace();
				log.info(">>> join error");
			}
			break;
		case "login":
			try {
				
				String id = request.getParameter("id");
				String pwd = request.getParameter("pwd");
				
				MemberVO mvo = new MemberVO(id,pwd);
				log.info(">>> login check1" + mvo);
				MemberVO loginMvo = msv.login(mvo);
				log.info("login mvo >>"+loginMvo);
				
				if(loginMvo != null) {
					//세션객체갖고오기
					HttpSession ses = request.getSession();
					ses.setAttribute("ses", loginMvo);
					ses.setMaxInactiveInterval(10*60); //로그인 유지시간(초단위)
				}else {
					request.setAttribute("msg_login", -1);
				}
				destPage="/index.jsp";
			}catch(Exception e) {
				e.printStackTrace();
				log.info(">>> login error");
			}
			break;
			
		case "logout":
			try {
				//세션에 값이 있다면 해당 세션 연결 끊기
				HttpSession ses = request.getSession();
				//lastLogin 정보 update
				//ses에서 mvo 객체로 가져오기
				
				MemberVO mvo = (MemberVO)ses.getAttribute("ses");
				log.info("ses에서 추출한 mvo >> {} ", mvo);
				
				//lastLogin update
				isOk = msv.lastLogin(mvo.getId());
				log.info("lastLogin >>> ",isOk >0 ? "OK" : "Fail");
				ses.invalidate();
				destPage = "/index.jsp";
				
				
			}catch(Exception e) {
				e.printStackTrace();
				log.info(">>> logout error");
				
			}
			break;
		}
		
		
		
		//목적지 주소 값 설정
		rdp = request.getRequestDispatcher(destPage);
		//목적지 주소로 전송
		rdp.forward(request, response);
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		service(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		service(request,response);
	}

}
