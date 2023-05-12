import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  iconAwesome: IconProp;
  text: string;
  onClick: Function;
  color: string;
  args: boolean;
}

const AnimatedButton: React.FC<Props> = ({
  iconAwesome,
  text,
  onClick,
  color,
  args,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      rightIcon={
        <FontAwesomeIcon
          icon={iconAwesome}
          shake={isHovered}
          style={{ transition: 'transform 0.5s' }}
        />
      }
      color={color}
      onClick={() => onClick(args)}
    >
      {text}
    </Button>
  );
};

export default AnimatedButton;
