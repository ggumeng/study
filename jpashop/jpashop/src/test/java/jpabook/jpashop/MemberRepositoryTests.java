package jpabook.jpashop;

import static org.junit.jupiter.api.Assertions.fail;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import jakarta.annotation.security.RunAs;

@RunAs("SpringRunner")
@SpringBootTest
public class MemberRepositoryTests {

  @Autowired
  MemberRepository memberRepository;

  @Test
  @Transactional
  @Rollback(false)
  public void testMember() throws Exception {
    Member member = new Member();
    member.setUsername("memberA");

    Long savedId = memberRepository.save(member);

    Member findMember = memberRepository.find(savedId);

    Assertions.assertThat(findMember.getId()).isEqualTo(member.getId());
    Assertions.assertThat(findMember.getUsername()).isEqualTo(member.getUsername());
    Assertions.assertThat(findMember).isEqualTo(member);
  }

  @Test
  void testSave() {

  }
}
