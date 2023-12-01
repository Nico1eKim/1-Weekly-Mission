// 폴더 이름 변경, 폴더 추가 디자인
import Modal from "react-modal";
import styled from "styled-components";
import closeBtn from "@/src/image/close.svg";
import Image from "next/image";

interface BlueBtnModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  placeholder: string;
  btnType: string;
}

const BlueBtnModal = ({ isOpen, onRequestClose, title, placeholder, btnType }: BlueBtnModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <ModalContent>
        <CloseButton src={closeBtn} alt="닫는 버튼" onClick={onRequestClose} />
        <Heading>{title}</Heading>
        <Form>
          <Input placeholder={placeholder} />
          {/* 기능은 나중에 구현 */}
          <Button onClick={onRequestClose}>{btnType}</Button>
        </Form>
      </ModalContent>
    </CustomModal>
  );
};

const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 15px;
  border: 1px solid var(--stroke-light, #dee2e6);
  background: var(--gray-white, #fff);
`;

const ModalContent = styled.div`
  // text-align: center;
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  position: relative;
`;

const CloseButton = styled(Image)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const Heading = styled.h2`
  color: var(--linkbrary-gray-100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const Input = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
`;

const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 8px;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));

  color: var(--grey-light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  cursor: pointer;
`;

export default BlueBtnModal;
