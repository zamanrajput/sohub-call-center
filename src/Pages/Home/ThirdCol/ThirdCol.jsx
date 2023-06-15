import React from 'react';
import SecondSection from './SecondSection';
import FirstSection from './FirstSection';
const ThirdCol = () => {
    return (
        <div>
            {/* 1st section */}
            <section>
                <FirstSection></FirstSection>
            </section>

            {/* 2nd section  */}
            <section>
                <SecondSection></SecondSection>
            </section>
        </div>
    );
};

export default ThirdCol;