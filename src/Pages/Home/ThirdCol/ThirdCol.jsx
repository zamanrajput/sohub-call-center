import React from 'react';
import SecondSection from './SecondSection';
import FirstSection from './FirstSection';
const ThirdCol = () => {
    return (
        <div>
          
                <FirstSection></FirstSection>
  

            {/* 2nd section  */}
            <section>
                <SecondSection></SecondSection>
            </section>
        </div>
    );
};

export default ThirdCol;