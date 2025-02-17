import { chakra, HTMLChakraProps, useColorModeValue as mode } from '@chakra-ui/react'
import { HTMLMotionProps, isValidMotionProp, motion, Variants } from 'framer-motion'
import * as React from 'react'

const filter = (props: any) => Object.fromEntries(Object.entries(props).filter(([key]) => !isValidMotionProp(key)))

type DivProps = Omit<HTMLChakraProps<'div'>, keyof HTMLMotionProps<'div'>>

export const MotionDiv = motion.custom(React.forwardRef((props: DivProps, ref: React.Ref<any>) => <chakra.div ref={ref} {...filter(props)} />))

const variants: Variants = {
    init: {
        opacity: 0,
        y: -4,
        display: 'none',
        transition: { duration: 0 },
    },
    open: {
        opacity: 1,
        y: 0,
        display: 'block',
        transition: { duration: 0.15 },
    },
    closed: {
        opacity: 0,
        y: -4,
        transition: { duration: 0.1 },
        transitionEnd: {
            display: 'none',
        },
    },
}

type MotionDivProps = DivProps & HTMLMotionProps<'div'>

export const NavMenu = React.forwardRef((props: MotionDivProps, ref: React.Ref<any>) => (
    <MotionDiv
        ref={ref}
        initial="init"
        variants={variants}
        outline="0"
        opacity="0"
        bg={mode('white', 'gray.700')}
        w="full"
        shadow="lg"
        px="4"
        pos="absolute"
        insetX="0"
        pt="6"
        pb="12"
        {...props}
    />
))