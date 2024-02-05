import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Dropdown1({ setCategory }) {
  return (
    <div className='button-box' style={{ display: "flex", marginTop: "-20px" }}>
      <DropdownButton id="dropdown-basic-button" title="협업 및 광고">
        {/* 선택된 값을 setCategory를 통해 상위로 전달 */}
        <Dropdown.Item onClick={() => setCategory('컨텐츠 협업')}>컨텐츠 협업</Dropdown.Item>
        <Dropdown.Item onClick={() => setCategory('광고 서비스')}>광고 서비스</Dropdown.Item>
        <Dropdown.Item onClick={() => setCategory('파트너쉽 제안')}>파트너쉽 제안</Dropdown.Item>
      </DropdownButton>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          활동 분야
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setCategory('음악')}>음악</Dropdown.Item>
          <Dropdown.Item onClick={() => setCategory('게임')}>게임</Dropdown.Item>
          <Dropdown.Item onClick={() => setCategory('엔터테인먼트')}>엔터테인먼트</Dropdown.Item>
          <Dropdown.Item onClick={() => setCategory('뷰티')}>뷰티</Dropdown.Item>
          <Dropdown.Item onClick={() => setCategory('교육')}>교육</Dropdown.Item>
          <Dropdown.Item onClick={() => setCategory('과학/기술')}>과학/기술</Dropdown.Item>
          <Dropdown.Item onClick={() => setCategory('스포츠')}>스포츠</Dropdown.Item>
          <Dropdown.Item onClick={() => setCategory('라이프스타일')}>라이프스타일</Dropdown.Item>
          <Dropdown.Item onClick={() => setCategory('펫/동물')}>펫/동물</Dropdown.Item>
          <Dropdown.Item onClick={() => setCategory('푸드')}>푸드</Dropdown.Item>
          <Dropdown.Item onClick={() => setCategory('코메디')}>코메디</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
