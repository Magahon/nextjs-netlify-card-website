import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import Image from "next/image";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <div className="container">
        <div>
          <div className="headerContent">
            <Image
              src="/images/avatar.png"
              alt="Denys Bolkisev"
              height={100}
              width={100}
              quality={100}
              priority
              className="avatarImage"
            />
            <h1>
              Denys Bolkisev
            </h1>
          </div>
          <span className="handle">@magahon</span>
          <h2>I'm freelance Full Stack developer. Working on React, nodejs, PHP projects</h2>
          <SocialList />
        </div>
      </div>
      <style jsx global>{`
      .avatarImage {
        border-radius: 80px;
      }
      `}</style>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
          padding-left: 20px;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
          margin-left: 10px;
        }
        .headerContent {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
