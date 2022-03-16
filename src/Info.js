import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);

  const { username, message } = form;

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, //원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ' : ' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <input
          type='text'
          name='username'
          placeholder='사용자명'
          value={username}
          onChange={onChange}
        />
        <input
          type='text'
          name='message'
          placeholder='아무거나 입력해 보세요'
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default Info;
