import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import Temple from ".././assets/event2.jpeg";

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
              prizes. 15 participants will be selected through a video audition
              process following registration. The first-place prize is 11,000,
              second place is 5,100, and third, fourth and fifth place is 2100
              each. Certificates of participation will be provided to all
              participants. The event will be judged by a panel of experts, led
              by Manohar Lal Ji Gayna and other members from the Gayna Samaj and
              Sant Samaj. The event is graced by the support of Bhamashah.
            </p>
            <br />
            <p>
              भजन प्रतियोगिता 25 साल से कम आयु के लड़के और लड़कियों के लिए एक
              कार्यक्रम है, जो उनके गाने की कौशल को दिखाने और उत्साहवर्धक
              पुरस्कारों के लिए प्रतियोगिता करने के लिए है। 15 प्रतिभागियों को
              पंजीकरण के बाद वीडियो ऑडिशन के माध्यम से चयनित किया जाएगा। पहले
              स्थान का पुरस्कार 11,000, दूसरे स्थान का 5,100 और तीसरे, चौथे और
              पांचवें स्थान का 2100 होगा। सभी प्रतिभागियों को भागीदारी
              प्रमाणपत्र प्रदान किए जाएंगे। कार्यक्रम को मनोहर लाल जी गायना और
              गायना समाज और संत समाज के अन्य सदस्यों द्वारा समन्वयित शक्तियों
              द्वारा किया जाएगा। कार्यक्रम को भामाशाह की समर्थन से समझाया जाएगा।
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
              यह कार्यक्रम विविध क्षेत्रों से सफल स्त्रियों से सुनने के लिए एक
              अवसर है जैसे कि वे अपनी अनुभवों और सुझावों को एक खुले से बोलने की
              स्थिति पर साझा करते हैं। कार्यक्रम पांच अतिथि सुविधाकर्ताओं को
              शामिल करेगा, सभी कि स्त्रियों को, जो विविध विषयों पर एक विविध रेंज
              के स्पष्ट दृष्टिकोण प्रदान करेंगे। यह सभी उपस्थितियों के लिए एक
              सम्बन्धित और सूचनापूर्ण कार्यक्रम की वादा करता है, जो सफल
              स्त्रियों से सीखने की मौका प्रदान करता है और दुनिया की नई दृष्टि
              पर प्राप्त करता है।
            </p>
            <br />
            <p className="text-[#fff] font-bold text-[40px]">
              YUVA SANSAD : SPEECH COMPETITION / युवा संसद : भाषण योग्यता
            </p>
            <p>
              This event is for young individuals to showcase their public
              speaking skills and share their perspectives on important issues.
              The competition is open to 21 participants, each of whom will have
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
              यह कार्यक्रम युवा व्यक्तियों को अपनी सार्वजनिक बोलने की क्षमता को
              प्रदर्शित करने और महत्वपूर्ण मुद्दों पर अपने दृष्टिकोण को साझा
              करने के लिए है। प्रतियोगिता 21 प्रतिभागियों को खुली है, जिसमें
              प्रत्येक 8 मिनट के लिए अपनी भाषण को प्रस्तुत करने को मिलेगा। यह
              कार्यक्रम Bhamashah द्वारा प्रायोजित है और शीर्ष 10 प्रतिभागियों
              को पुरस्कार धन प्रदान करता है, जहाँ पहले स्थान के विजेता को 11,000
              और दूसरे, तीसरे, चौथे स्थान के विजेता को 5100 और पांचवें से दसवें
              स्थान के विजेता को 2100 प्रत्येक प्रदान किया जाएगा। सभी
              प्रतिभागियों को सम्मान पत्र प्रदान किए जाएंगे उनके प्रयासों के
              सम्मान के रूप में। यह सभी दर्शकों के लिए एक समर्थन के साथ
              ज्ञानवर्धक और प्रेरणात्मक घटना होगी, क्योंकि उन्हें युवा दिमागों
              से संवाद करके और विभिन्न मुद्दों पर उनकी सोच सुनने का अवसर मिलता
              है।
            </p>
            <p className="text-[#fff] font-bold text-[40px]">
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
            </p>
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
              यह युवा व्यक्तियों को अपने चयनित क्षेत्रों में उत्कृष्टता की
              प्रवणता के लिए प्रेरित और प्रोत्साहित करने के लिए डिजाइन किया गया
              है। घटना में छह सफल बोलकर्ता होंगे, जो किसी न किसी श्रेणी के प्रति
              प्रतिनिधित्व करेंगे: IAS/IPS, RAS/RJS, IES, Medical, Business, and
              Sports. ये बोलकर्ता अपने अनुभव और सुझाव साझा करेंगे, जो दर्शकों को
              मूल्यवान मार्गदर्शन और प्रेरणा प्रदान करेगा।
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
              सेमिनार के अंत में, अपने चयनित क्षेत्र में सफलता प्राप्त करने वाले
              व्यक्तियों को सम्मान देने के लिए प्रतिभा सम्मान समारोह का आयोजन
              किया जाएगा। इस घटना में शामिल होने के लिए सभी को खुला है या
              स्वीकृति प्राप्त की जा सकती है, यह युवा लोगों को सबसे अच्छे से
              सीखने और अपने लक्ष्यों को प्राप्त करने के लिए प्रेरित करने का एक
              शानदार अवसर होगा।
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
