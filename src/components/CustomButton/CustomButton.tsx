import { AddBtnStyle, BtnStyle } from './style';

export interface BtnProps {
  btnName: string;
  onClick?: any;
  children?: string;
}

const CustomButton = (props: BtnProps) => {
  switch (props.btnName) {
    // 추가하기 버튼
    case 'add': {
      return (
        <AddBtnStyle onClick={props.onClick}>{props.children}</AddBtnStyle>
      );
    }
    case 'delSwitch': {
      return <BtnStyle onClick={props.onClick}>{props.children}</BtnStyle>;
    }

    default: {
      return <button onClick={props.onClick}>{props.children}</button>;
    }
  }
};

export default CustomButton;
