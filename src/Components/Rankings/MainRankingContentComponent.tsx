import React, { useState } from 'react';
import styled from 'styled-components';
import { Difficulty, Ranks, difficultyColor } from '../../States/Ranks';
import { useRecoilState } from 'recoil';
import MainRankingSingleSong from './MainRankingSingleSong';

type Prop = {
    level: number,
    difficulty: Difficulty,
}

const MainRankingContentComponent: React.FC<Prop> = (props: Prop) => {

    const [currentRank, setCurrentRank] = useRecoilState(Ranks);

    return (
        <MainDiv>
            <DiffDiv color={difficultyColor[props.difficulty] + "88"}>
                <DiffTitle>{Difficulty[props.difficulty]}</DiffTitle>
            </DiffDiv>
            <DiffContent>
                {
                    currentRank.map((item, index) => {
                        if(item.difficulty == props.difficulty && item.level == props.level) {
                            return <MainRankingSingleSong index={index} />
                        } else {
                            return null;
                        }
                    })
                }
            </DiffContent>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    margin: 20px 0px 0px 0px;
`

const DiffDiv = styled.div`
    display: flex;
    width: 150px;
    height: 40px;
    position: relative;
    background: ${props => props.color || 'white'};
    &:before {
        content: "";
        position: absolute;
        right: -40px;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 40px solid ${props => props.color || 'white'};;
        border-top: 40px solid transparent;
    }
    border-top-left-radius: 5px;
    align-items: center;
    justify-content: center;
`

const DiffTitle = styled.p`
    font-size: 20px;
    font-family: taikoBold;
`

const DiffContent = styled.div`
    padding: 10px;
    background-color: #00000018;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

export default MainRankingContentComponent;