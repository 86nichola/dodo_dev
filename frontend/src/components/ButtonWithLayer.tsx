import React, { useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const StyledOlDiv = styled.div`
    padding-top: var(--space-4);
`
const StyledOl = styled.ol`
    position: absolute;
    left: calc(var(--space-8) * -1);
    background-color: #fff;
    box-shadow: var(--shadow-md);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-grey-04);
    z-index: 1;
    visibility: hidden;
    opacity: 1;
    transition: all var(--duration-slow) var(--easing-smooth);
    transform: translateY(var(--space-4));
    pointer-events: none;
    max-height: calc(100vh - 5rem);
    overflow: auto;
    min-width: 350px;
`
const StyledLi = styled.li`
    :hover {
        text-decoration: none;
        color: var(--color-grey-08);
        background: var(--color-grey-01);
    }
`

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: var(--space-16) var(--space-24);

    :hover {
        text-decoration: none;
    }
`
const StyledButtonDiv = styled.div`
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;
    border: 0;
    &:hover ${StyledOl} {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    }
`
const StyledSpanDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: var(--color-grey-07);
`
const StyledButton = styled.button`
    display: flex;
    align-items: center;
    cursor: default;
    width: 100%;
    color: var(--color-grey-07);
    text-align: center;
    font-family: var(--font-family-sans);
    padding: 0 var(--space-12);
    height: 100%;
    background-color: #fff;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transition: var(--easing-smooth) var(--duration-fast);
`
const StyledSpan1 = styled.span`
    font-size: 1rem;
    text-align: 'center';
`
const StyledSpan2 = styled.span`
    text-align: 'left';
    color: var(--color-grey-08);
    margin-bottom: var(--space-4);
    margin-left: var(--space-8);
    margin-bottom: 0;
`

const StyledSpan3 = styled.span`
    text-align: 'left';

    --curr-font-size: var(--body-md-font-size);
    --curr-line-height: var(--body-md-line-height);
    --curr-letter-spacing: var(--body-md-letter-spacing);
    --curr-font-weight: var(--body-md-font-weight);
    --curr-text-transform: var(--body-md-text-transform);
    font-size: var(--curr-font-size);
    line-height: var(--curr-line-height);
    letter-spacing: var(--curr-letter-spacing);
    font-weight: var(--curr-font-weight);
    text-transform: var(--curr-text-transform);
    padding-left: var(--space-12);
    margin-bottom: 0;
`

const StyledSvg = styled(Icon)`
    fill: 'currentColor';

    transform: translateY(2px);
    color: var(--color-grey-06);
    margin-left: var(--space-4);
    transition: var(--easing-smooth) var(--duration-slow);
`
const StyledHr = styled.hr`
    margin-block-start: var(--spacing);
    margin-block-end: var(--spacing);
    height: 1px;
    border: 0;

    background-color: var(--color-grey-04);
    margin: var(--space-4) var(--space-24);
`

interface buttonProps {
    label?: string
    linkList?: string[]
    isVisible?: boolean
    hideLayerList?: any
}

function ButtonWithLayer({ label, linkList }: buttonProps) {
    return (
        <StyledButtonDiv>
            <StyledButton>
                <StyledSpan1>{label ? label : '?????????'}</StyledSpan1>
                <StyledSvg viewBox="0 0 24 24" width="24" height="20">
                    <path
                        fillRule="evenodd"
                        d="M4.646 8.646a.5.5 0 01.708 0L12 15.293l6.646-6.647a.5.5 0 01.708.708l-7 7a.5.5 0 01-.708 0l-7-7a.5.5 0 010-.708z"
                        clipRule="evenodd"
                    ></path>
                </StyledSvg>
            </StyledButton>
            <StyledOlDiv>
                <StyledOl>
                    <StyledLi>
                        <StyledLink to="">
                            <StyledSpanDiv>
                                <StyledSpan2>??????</StyledSpan2>
                                <StyledSpan3>
                                    dodoist??? IFTTT, ?????????, ?????? ????????? ??????
                                    ?????? ?????? ??????????????????...
                                </StyledSpan3>
                            </StyledSpanDiv>
                        </StyledLink>
                        <StyledHr />
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="">
                            <StyledSpanDiv>
                                <StyledSpan2>???????????? ?????????</StyledSpan2>
                                <StyledSpan3>
                                    dodoist??? ?????? ???????????? ?????? ????????? ??? ??????
                                    ?????? ????????????.
                                </StyledSpan3>
                            </StyledSpanDiv>
                        </StyledLink>
                        <StyledHr />
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="">
                            <StyledSpanDiv>
                                <StyledSpan2>????????? ??????</StyledSpan2>
                                <StyledSpan3>
                                    dodoist??? ??????????????? ???????????? ?????? ?????? ??????
                                    ??? ?????? ????????????.
                                </StyledSpan3>
                            </StyledSpanDiv>
                        </StyledLink>
                        <StyledHr />
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="">
                            <StyledSpanDiv>
                                <StyledSpan2>????????? + ?????????</StyledSpan2>
                                <StyledSpan3>
                                    ?????? ?????? ?????? ????????? ???????????? ????????????
                                    ???????????? ?????? ????????? ?????? ????????????.
                                </StyledSpan3>
                            </StyledSpanDiv>
                        </StyledLink>
                        <StyledHr />
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="">
                            <StyledSpanDiv>
                                <StyledSpan2>?????????</StyledSpan2>
                                <StyledSpan3>
                                    ?????? ????????? ?????? ??? ??? ?????? ????????? ??????,
                                    ????????? Todoist ??? ??? ?????? ????????? ????????????.
                                </StyledSpan3>
                            </StyledSpanDiv>
                        </StyledLink>
                    </StyledLi>
                </StyledOl>
            </StyledOlDiv>
        </StyledButtonDiv>
    )
}

export default ButtonWithLayer
