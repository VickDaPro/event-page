import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";

function EventDay() {
  return (
    <>
      <div className="eventDay flex justify-between bg-white items-center">
        <div className="p-[20px]">
          {/* <p className="uppercase tracking-[1px] text-[#FF2C55]">Day 1</p> */}
          <p className="text-[#0E1027] font-bold text-[40px]">
            BHAJAN PRTIYOGITA / भजन प्रतियोगिता
          </p>
          <div className="tracking-[1px] text-[#0E1027]">
            <p>
              The Bhajan Pratyogita is an event for boys and girls aged 25 and
              under to showcase their singing talents and compete for exciting
              prizes. 11 participants will be selected through a video audition
              process following registration. The first-place prize is 11,000,
              second place is 5,100, and third, fourth and fifth place is 2100
              each. Certificates of participation will be provided to all
              participants. The event is graced by the support of Bhamashah.
            </p>
            <br />
            <p>
              भजन प्रतियोगिता 25 वर्ष और उससे कम उम्र के लड़कों और लड़कियों के
              लिए अपनी गायन प्रतिभा दिखाने और रोमांचक पुरस्कारों के लिए
              प्रतिस्पर्धा करने के लिए एक कार्यक्रम है। पंजीकरण के बाद वीडियो
              ऑडिशन प्रक्रिया के माध्यम से 11 प्रतिभागियों का चयन किया जाएगा।
              प्रथम स्थान प्राप्त करने वाले को 11,000, द्वितीय स्थान प्राप्त
              करने वाले को 5,100 तथा तृतीय, चतुर्थ व पांचवें स्थान पर आने वाले
              प्रत्येक को 2100 रुपये का पुरस्कार दिया जाता है। सभी प्रतिभागियों
              को भागीदारी का प्रमाण पत्र प्रदान किया जाएगा। भामाशाह के सहयोग से
              आयोजन की शोभा बढ़ रही है।
            </p>
          </div>
        </div>
        {/* <div className="p-[20px]"> */}
        {/* <img className="w-[350px] h-[400px]" src={Guruji} alt="" /> */}
        {/* </div> */}
      </div>
      <div className="eventDay flex justify-between bg-black items-center">
        {/* <div className="p-[20px]">
          <img className="w-[350px] h-[400px]" src={Temple} alt="" />
        </div> */}
        <div className="p-[20px]">
          {/* <p className="uppercase tracking-[1px] text-[#FF2C55]">Day 2</p> */}
          <p className="text-[#fff] font-bold text-[40px]">
            NARI SHAKTI : EK SAMVAD / नारी शक्ति : एक संवाद
          </p>
          <div className="tracking-[1px] text-[#FF2C55]">
            <p>
              This event is an opportunity to hear from accomplished women from
              different fields as they share their experiences and insights in
              an open talk session on stage. The event will feature five guest
              speakers, all of them women, who will offer a diverse range of
              perspectives on a variety of topics. This promises to be an
              engaging and informative event for all attendees, providing an
              opportunity to learn from accomplished women and gain a new
              perspective on the world.
            </p>
            <br />
            <p>
              यह आयोजन विभिन्न क्षेत्रों की निपुण महिलाओं से सुनने का अवसर है
              क्योंकि वे मंच पर एक खुले वार्ता सत्र में अपने अनुभव और
              अंतर्दृष्टि साझा करती हैं। इस कार्यक्रम में पाँच अतिथि वक्ता
              होंगे, जिनमें सभी महिलाएँ होंगी, जो विभिन्न विषयों पर विविध प्रकार
              के दृष्टिकोण प्रस्तुत करेंगी। यह कार्यक्रम समाज की महिला शक्ति को
              प्रतिनिधित्व देने के साथ बालिकाओं के लिए मोटिवेशनल रहेगा।
            </p>
            <br />
            <p className="text-[#fff] font-bold text-[40px]">
              YUVA SANSAD : SPEECH COMPETITION / युवा संसद : भाषण योग्यता
            </p>
            <p>
              This event is for young individuals to showcase their public
              speaking skills and share their perspectives on important issues.
              The competition is open to 15 participants, each of whom will have
              8 minutes to deliver their speech. The event is sponsored by
              Bhamashah and features a prize money for the top 10 participants,
              with the first place winner receiving 11,000 and second, third,
              fourth place winner receiving 5100 and fifth to tenth place winner
              receiving 2100 each. Certificates of appreciation will be provided
              to all participants as a token of recognition for their efforts.
              This promises to be an engaging and inspiring event for all
              attendees as they get to listen to the young minds and their
              thoughts on various issues.
            </p>
            <br />
            <p>
              यह कार्यक्रम युवा व्यक्तियों के लिए अपने सार्वजनिक बोलने के कौशल
              का प्रदर्शन करने और महत्वपूर्ण मुद्दों पर अपने दृष्टिकोण साझा करने
              के लिए है। प्रतियोगिता में 15 प्रतिभागि होगा जिनमें से प्रत्येक के
              पास अपना भाषण देने के लिए 8 मिनट का समय होगा। यह कार्यक्रम भामाशाह
              द्वारा प्रायोजित है और शीर्ष 10 प्रतिभागियों के लिए एक पुरस्कार
              राशि है, जिसमें प्रथम स्थान प्राप्त करने वाले को 11,000 और दूसरे,
              तीसरे, चौथे स्थान के विजेता को 5100 और पांचवें से दसवें स्थान के
              विजेता को 2100 प्रत्येक प्राप्त होता है। सभी प्रतिभागियों को उनके
              प्रयासों के लिए मान्यता के प्रतीक के रूप में प्रशंसा के प्रमाण
              पत्र प्रदान किए जाएंगे। यह सभी उपस्थित लोगों के लिए एक आकर्षक और
              प्रेरक कार्यक्रम रहेगा क्योंकि उन्हें विभिन्न मुद्दों पर युवा
              दिमाग और उनके विचारों को सुनने का मौका मिलता है।
            </p>
            {/* <p className="text-[#fff] font-bold text-[40px]">
              KAVI SAMMELAN / कवि सम्मेलन
            </p>
            <p>
              The Kavi Sammelan is an event where poets come together to recite
              their poetry on various themes such as Bishnoism, Youth,
              Deshbhakti, Environment, and Education. The event is sponsored by
              Bhamashah and provides a platform for poets to showcase their
              talents and share their perspectives on important issues. The
              event promises to be a thought-provoking and inspiring experience
              for all attendees.{" "}
            </p>
            <br />
            <p>
              कवि सम्मेलन एक कार्यक्रम है, जहां कवियों ने बिश्नोईस्म, युवा,
              देशभक्ति, पर्यावरण और शिक्षा जैसी विविध विषयों पर अपनी कविताओं को
              सुनाने के लिए एक साथ आते हैं। कार्यक्रम को भामाशाह द्वारा समर्थित
              किया जाता है और कवियों को अपने कौशल को प्रदर्शित करने और
              महत्वपूर्ण मुद्दों पर अपने दृष्टिकोण साझा करने की एक मंच प्रदान
              करता है। कार्यक्रम सभी उपस्थितियों के लिए एक सोच करने वाला और
              प्रेरणात्मक अनुभव होने की वादा करता है
            </p> */}
          </div>
        </div>
      </div>
      <div className="eventDay flex justify-between bg-white items-center">
        <div className="p-[20px]">
          {/* <p className="uppercase tracking-[1px] text-[#FF2C55]">Day 3</p> */}
          <p className="text-[#0E1027] font-bold text-[40px]">
            YUVA PROTSAHAN SEMINAR / युवा प्रोत्साहन सेमिनार
          </p>
          <div className="tracking-[1px] text-[#0E1027]">
            <p>
              It is designed to inspire and motivate young individuals to strive
              for excellence in their chosen fields. The event will feature six
              accomplished speakers, each representing a different category:
              IAS/IPS, RAS/RJS, IES, Medical, Business, and Sports. These
              speakers will share their experiences and insights, providing
              valuable guidance and inspiration for attendees.
            </p>
            <br />
            <p>
              यह युवा व्यक्तियों को उनके चुने हुए क्षेत्रों में उत्कृष्टता के
              लिए प्रयास करने के लिए प्रेरित और प्रेरित करने के लिए आयोजित
              रहेगा। इस कार्यक्रम में छह सिद्ध वक्ता शामिल होंगे, जिनमें से
              प्रत्येक एक अलग श्रेणी का प्रतिनिधित्व करेगा: आईएएस/आईपीएस,
              आरएएस/आरजेएस, आईईएस, चिकित्सा, व्यवसाय और खेल। ये वक्ता उपस्थित
              लोगों के लिए मूल्यवान मार्गदर्शन और प्रेरणा प्रदान करते हुए अपने
              अनुभव और अंतर्दृष्टि साझा करेंगे।
            </p>
            <br />
            <p>
              At the end of the seminar, there will be a Pratibha Samman Samaroh
              to recognize and honor individuals who have achieved success in
              their chosen fields. The event will be open to whoever is present
              or invited to attend and it promises to be a great opportunity for
              young people to learn from the best and be motivated to achieve
              their goals
            </p>
            <br />
            <p>
              युवा महोत्सव के अंत में, अपने चुने हुए क्षेत्रों में सफलता हासिल
              करने वाले व्यक्तियों को सम्मानित करने के लिए एक प्रतिभा सम्मान
              समारोह होगा। इस समारोह में शिक्षा क्षेत्र में मेहनत से परचम लहराने
              वाले सभी प्रतिभाएँ आमंत्रित है।
            </p>
          </div>
        </div>
        {/* <div className="p-[20px]">
          <img
            className="w-[350px] h-[400px]"
            src="https://i.pinimg.com/originals/61/ad/ed/61aded6b2af03257ab46fac8190ba525.jpg"
            alt=""
          />
        </div> */}
      </div>
      <footer className="flex justify-center items-center py-3">
        <div className="flex-col items-center text-center">
          <p>Made with ❤️ by Vikas Jyani</p>
          <a
            href={`mailto:vickbishnoi@gmail.com`}
            className="flex items-center gap-2 cursor-pointer"
          >
            <MdEmail />
            <div className="text-center">vickbishnoi@gmail.com</div>
          </a>
        </div>
      </footer>
    </>
  );
}

export default EventDay;
