package repository;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import domain.MemberVO;
import orm.DatabaseBuilder;

public class MemberDAOImpl implements MemberDAO {
	private static final Logger log = LoggerFactory.getLogger(MemberDAOImpl.class);

	//sql Session 객체
	private SqlSession sql;
	public MemberDAOImpl() {
		new DatabaseBuilder();
		sql = DatabaseBuilder.getFactory().openSession();
	}
	@Override
	public int insert(MemberVO mvo) {
		log.info(">>> join check 3");
		int isOk = sql.insert("MemberMapper.reg", mvo); //reg는 namespace
		if(isOk > 0) sql.commit();
		return isOk;
	}
	@Override
	public MemberVO login(MemberVO mvo) {
		// TODO Auto-generated method stub
		log.info("login chck3 ");
		return sql.selectOne("MemberMapper.login",mvo);
	}
	@Override
	public int lastLogin(String id) {
		// TODO Auto-generated method stub
		log.info("lastlg ch3");
		int isOk = sql.update("MemberMapper.last",id);
		if(isOk>0) sql.commit();
		return isOk;
	}
	
	//메서드 처리
}
