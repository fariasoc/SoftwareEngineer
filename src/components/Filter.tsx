import { Text, Button, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type?: 'open' | 'closed';
  type02?: 'historic'
  list?: any;
}

export function Filter({ title, isActive = false, type, ...rest }: Props) {
  const { colors } = useTheme();

  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor="gray.500"
      flex={1}
      size="sm"
      {...rest}
    >
      <Text color={isActive ? colorType : "gray.100"} fontSize="xs" textTransform="uppercase">
        {title}
      </Text>
    </Button>
  );
}