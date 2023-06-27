import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  fontSize: string;
  customMargin?: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light' | 'Poppins-SemiBold';
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.customMargin ? `customMargin: ${props.customMargin};` : '')}

  padding-top: 3px;
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
`;
