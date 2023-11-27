package service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import domain.MemberVO;
import repository.MemberDAO;
import repository.MemberDAOImpl;

public class MemberServiceImpl implements MemberService {
	private static final Logger log = LoggerFactory.getLogger(MemberServiceImpl.class);
	
	private MemberDAO mdao; // repository => interFace로 생성
	public MemberServiceImpl() {
		mdao = new MemberDAOImpl();
	}
	@Override
	public int register(MemberVO mvo) {
		// TODO Auto-generated method stub
		log.info(">>> join check2");
		return mdao.insert(mvo);
	}
	@Override
	public MemberVO login(MemberVO mvo) {
		// TODO Auto-generated method stub
		log.info("login ch2");
		return mdao.login(mvo);
	}
	@Override
	public int lastLogin(String id) {
		// TODO Auto-generated method stub
		log.info(">>> lastLogin check 2");
		
		return mdao.lastLogin(id);
	}
	
	
}
