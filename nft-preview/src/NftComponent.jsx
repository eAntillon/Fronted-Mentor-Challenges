import React from 'react';
import styled from '@emotion/styled';
import styles from './styles';
import image_equilibrium from './assets/images/image-equilibrium.jpg';
import eth from './assets/images/icon-ethereum.svg';
import clk from './assets/images/icon-clock.svg';
import avatar from './assets/images/image-avatar.png';
import view from './assets/images/icon-view.svg';

const Container = styled.div`
    align-items: center;
    background-color: ${styles.neutral.blue_bg};
    display: flex;
    font-family: ${styles.font};
    font-size: 18px;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;

const Card = styled.div`
    align-items: center;
    background-color: ${styles.neutral.blue_card};
    border-radius: 12px;
    color: ${styles.neutral.white};
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 350px;
    padding-bottom: 0;
`;

const Img = styled.img`
    border-radius: 12px;
    width: 100%;
    height: 100%;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    padding-bottom: 0;
    .title {
        font-weight: 600;
        font-size: 22px;
        margin: 10px 0;
        margin-right: auto;
        &:hover {
            color: ${styles.primary.cyan};
            cursor: pointer;
        }
    }
    .desc {
        color: ${styles.primary.blue};
        font-weight: 300;
        padding: 10px 0;
    }
    .details {
        display: flex;
        justify-content: space-between;
        padding: 18px 0;
        color: ${styles.primary.blue};
        font-size: 15px;
        .price {
            display: flex;
            align-items: center;
            color: ${styles.primary.cyan};
        }
        .time {
            display: flex;
            align-items: center;
        }
        img {
            margin-right: 5px;
        }
    }

    .author {
        display: flex;
        align-items: center;
        padding: 20px 0;
        padding-bottom: 25px;
        color: ${styles.primary.blue};
        img {
            border: 1px solid gray;
            border-radius: 50%;
            margin-right: 10px;
        }
        .author-name {
            color: ${styles.neutral.white};
            &:hover {
                color: ${styles.primary.cyan};
                cursor: pointer;
            }
        }
    }
    hr {
        background-color: ${styles.neutral.blue_line};
        height: 1px;
        border: 0;
    }
`;

const HoverContainer = styled.div`
    position: relative;
    &:hover div {
        opacity: 0.55;
    }
    &:hover img {
        opacity: 1;
    }
`;

const OverlayColor = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 99%;
    width: 100%;
    opacity: 0;
    transition: 0.2s ease;
    border-radius: 12px;
    background-color: ${styles.primary.cyan};
`;

const OverlayIcon = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin:auto;
    transition: 0.2s ease;
    border-radius: 12px;
`;

function NftComponent() {
    return (
        <Container>
            <Card>
                <HoverContainer>
                    <Img src={image_equilibrium} alt="image-nft" />
                    <OverlayColor />
                    <OverlayIcon src={view} alt="" />
                </HoverContainer>
                <Description>
                    <p className="title">Equilibrium #3429</p>
                    <p className="desc">
                        Our Equilibrium collection promotes balance and calm.
                    </p>
                    <div className="details">
                        <p className="price">
                            <img src={eth} alt="" sizes="10px" />
                            0.041 ETH
                        </p>
                        <p className="time">
                            <img src={clk} alt="" sizes="10px" />3 days left
                        </p>
                    </div>
                    <hr />
                    <div className="author">
                        <img src={avatar} alt="author-picture" width="36px" />
                        <p>
                            Creation of{' '}
                            <span className="author-name">Jules Wyvern</span>
                        </p>
                    </div>
                </Description>
            </Card>
        </Container>
    );
}

export default NftComponent;
