import React from 'react';
import '../index.css';
import { Typography } from 'antd';

const { Paragraph} = Typography;

const About = () => {
//   const [ellipsis, setEllipsis] = useState(true);

  return (
    <>
      {/* <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis);
        }}
      /> */}
    <div  style={{marginLeft:-90,marginTop:75}}>
      <Paragraph >
      <b>Style That Speaks for You.</b><br></br><br></br>

Welcome to SatinSilk — your go-to destination for clothing that doesn't just follow trends but sets them. We’re more than just an online store; we’re a community of style-forward individuals who believe fashion is a way to express identity, confidence, and creativity.
<br></br>
<b>Our Story</b><br></br>
Born from a passion for design and a frustration with fast fashion, ClothWear was founded in 2025 with a simple goal: to bring high-quality, statement-making pieces to people who want to stand out, not blend in. Whether you're dressing for the everyday or a one-of-a-kind moment, our collections are made to help you feel like your best self — every single day.
<br></br>
<b>What We Stand For</b>
<pre>Quality First: Every piece we create is crafted with care, using premium fabrics and ethical production methods.

Authentic Style: We design clothing that reflects real people and real lifestyles. No fluff — just fashion that feels right.

Community Vibes: You’re not just a customer, you’re part of the fam. We listen, we learn, and we evolve with you.</pre>

<b>What You’ll Find Here</b><br></br>
From laid-back essentials to bold statement pieces, our curated collections are made to mix, match, and make your wardrobe work harder. With new arrivals dropping regularly, we’re here to keep your closet as fresh as your mindset.

Thank you for being here.
Explore. Express. Elevate.
#WearItYourWay
      </Paragraph>

    </div>
      
    </>
  );
};

export default About;