import Link from 'next/link'
import { Image, Link as A } from 'rebass'

export default ({ size = 50, light = false, ...props }) => (
  <Link href="https://helyxhacks.org">
    <A sx={{ cursor: 'pointer', lineHeight: 0 }}>
      <Image
        {...props}
        src="https://cdn.glitch.com/666e912e-e611-47bd-a637-43b16a54ef38%2F9ed4f9_2bf7dacbfe864c028e5ff4ad9394d505_mv2.png?v=1613412449427"
        alt="Helyx Hacks III avatar"
        width={size}
        height={size}
        sx={{
          borderRadius: 'circle',
          overflow: 'hidden',
          bg: 'primary',
          ...props.sx
        }}
      />
    </A>
  </Link>
)
