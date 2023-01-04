import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art Facilities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolorem unde aperiam porro nobis placeat eligendi voluptate quisquam non numquam, error, nulla mollitia quibusdam quam! Porro vel provident accusantium praesentium.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of diverse classes",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore possimus doloremque distinctio. Dolorem quam explicabo corrupti assumenda hic ex molestiae illo cumque distinctio adipisci est, beatae ipsum repellat repudiandae dignissimos!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Export and pro trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea quas consequatur sapiente rem, amet eius esse similique nesciunt laudantium repellendus ipsam vitae quisquam nam asperiores assumenda enim commodi magni.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odio
            error inventore impedit, omnis mollitia sequi obcaecati id
            accusantium doloribus corporis. Odit dolores odio facilis quidem,
            saepe quae sit nihil!
          </p>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING {"   "}{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                nesciunt tempore? Id in reprehenderit dolor inventore, porro
                praesentium totam eius. Commodi magnam molestias dolorem
                deleniti sunt repellat voluptate, eaque aliquid?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                voluptatem, provident tenetur minima possimus magnam esse quam
                illo, beatae, tempore cumque architecto blanditiis consequatur
                quod. Quis, quos. Soluta, vero iusto.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
