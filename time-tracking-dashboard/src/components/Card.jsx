import React from 'react';
import work from '../assets/images/icon-work.svg'
import exercise from '../assets/images/icon-exercise.svg'
import play from '../assets/images/icon-play.svg'
import selfcare from '../assets/images/icon-self-care.svg'
import social from '../assets/images/icon-social.svg'
import study from '../assets/images/icon-study.svg'


const Card = ({ title, timeframe, freq }) => {
    const { current, previous } = timeframe;
    let bgColor, bgImage = ''
    if(title === 'Work'){
        bgColor = 'bg-lightRed1'
        bgImage = work
    }else if(title =='Play'){
        bgColor = 'bg-softBLue'
        bgImage = play
    }else if(title =='Study'){
        bgColor = 'bg-lightRed2'
        bgImage = study
    }else if(title =='Exercise'){
        bgColor = 'bg-limeGreen'
        bgImage = exercise
    }else if(title =='Social'){
        bgColor = 'bg-violet'
        bgImage = social
    }
    else if(title =='Self Care'){
        bgColor = 'bg-softOrange'
        bgImage = selfcare
    }
    return (
        <div>
            <div className={bgColor +" h-1/5 rounded-t-2xl p-6 sm:p-0 overflow-hidden relative"}>
                <img src={bgImage} alt="" className='right-6 -top-2 w-20 absolute'/>
            </div>
            <div className={bgColor + " h-4/5 rounded-b-2xl mb-6 sm:mb-0"}>
                <div className="bg-darkBlue2 rounded-2xl h-full">
                    <div className="bg-darkBlue2 flex flex-col text-white rounded-2xl h-full p-7 pb-4 hover:bg-desaturatedBLue/30 hover:cursor-pointer">
                        <div className="flex flex-row justify-between mb-3 sm:mb-5">
                            <p className="font-bold text-md sm:text-sm">
                                {title}
                            </p>
                            <button
                                className="align-middle font-sans leading-[0]"
                                onClick={() => console.log('sdfasd')}
                            >
                                <div className="leading-[0] font-bold text-3xl -mt-2 text-paleBlue hover:text-white">
                                    ...
                                </div>
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-between sm:items-start sm:flex-col">
                            <p className="text-4xl sm:text-5xl font-light mb-3">
                                {current}
                                hrs
                            </p>
                            <p className="text-md sm:text-sm self-start sm:self-auto text-paleBlue">
                                Last{' '}
                                {freq != 'daily'
                                    ? freq.substring(0, freq.length - 2)
                                    : 'day'}{' '}
                                - {previous}hrs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
