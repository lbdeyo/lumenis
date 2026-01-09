import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lumenis Partners | About",
};

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#281e32]">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-start pt-5 pb-32 px-6 bg-[#281e32]">
        <div className="flex flex-col items-start gap-8 text-left w-full">
          <h1 className="text-5xl font-normal leading-10 tracking-tight">
            About Lumenis
          </h1>

          <div className="max-w-4xl w-full">
            <Image
              src="/img/anna-maria.avif"
              alt="Anna Maria Larsen"
              width={300}
              height={400}
              className="float-left rounded-lg mr-6 mb-4 max-w-xs"
              priority
            />
            <div className="space-y-6 bio-content">
              <p className="text-xl leading-8 text-white">
                Anna Maria Larsen has centered her career, her successful
                business and her community service on a talent for seeking
                truth, a skill for intuitive listening and a zest for life.
                Whether leading Lumenis Partners&apos; executive searches for
                rapidly growing smaller companies or for Fortune 500 companies,
                or serving on local and national not-for-profit boards,
                she&apos;s found life to be a continuous flow of adventure and
                learning. Anna Maria has an uncanny talent for asking the right
                questions to get to the true needs of organizations and
                individuals.
              </p>

              <p className="text-xl leading-8 text-white">
                Anna Maria began her career in the executive search profession
                with two Denver firms, Horn Fagen Lund and later the Fitzgerald
                Group. In 1990 she founded the executive search practice within
                Larsen Consulting International, now known as Lumenis Partners.
                Grabbing the reins of this business allowed her to expand the
                scope of her searches to national, international, and across
                numerous business verticals. It also allowed Lumenis Partners to
                develop the personalized and conversational approach so valued
                by clients and to focus on C-level and VP/Director searches. Her
                natural and intuitive abilities to articulate the needs of her
                search clients and her ability to assess candidates has led to a
                successful retained practice for a mix of large and small
                businesses and not-for-profit organizations. Joining Anna Maria
                in Lumenis Partners is her husband, Les Larsen, who brings
                tremendous knowledge and technical background in technology,
                telecommunications, energy, and small business sectors.
              </p>

              <p className="text-xl leading-8 text-white">
                As an outgrowth of her work with senior executives, Anna Maria
                developed a growing Executive Mentoring practice after seeking
                additional training in leadership and executive coaching through
                Harvard and Georgetown Universities. &quot;It all comes down to
                listening and reflecting back to individuals who they really
                are,&quot; Anna Maria says. &quot;If a person is questioning or
                not satisfied with how or what they are achieving in their life,
                I walk with each of them to help them refocus and rediscover
                their own strengths and enable them to once again be driven by
                passion.&quot; She views her practice as one of transitional
                mentoring rather than problem-solution exercises.
              </p>

              <p className="text-xl leading-8 text-white">
                Anna Maria&apos;s passion for truth and her innate curiosity do
                not stop with Lumenis Partners. Anna Maria is an enthusiastic
                advocate and volunteer for many local, national and
                international non-profits serving communities and business. She
                was a member of the Board of Trustees of the Denver Botanic
                Gardens. &quot;The Gardens speak to the soul, it&apos;s a place
                where people can be lifted by the beauty of nature&quot; she
                says. She recently completed two terms on the National Board of
                Governors of the American Red Cross. In her role she was
                instrumental in the selection of the new CEO for this $3 billion
                organization. Anna Maria is most proud of her work with her
                fellow Board colleagues as an architect for transformative
                change in this 130 year-old organization.
              </p>

              <p className="text-xl leading-8 text-white">
                Anna Maria co-chaired the transition team for former Colorado
                Governor Bill Owens, leading a team of 170 business and
                community leaders in reviewing state government departments and
                identifying qualified individuals to fill Cabinet posts and key
                governmental positions. Other past civic activities include
                Chair of the Governor&apos;s Commission on Community Service,
                First Vice President of the Denver Rotary Club and President and
                Trustee of its Foundation, and an advisory board member of the
                Mile High Council of Girl Scouts. She served on the Board of the
                Denver Metro Chamber of Commerce. Working with the Chamber, she
                helped establish the Small Business Profit Center and founded
                the Women Business Owners Network, which focused on the needs of
                entrepreneurial women. Active within the Roman Catholic Church,
                Anna Maria was appointed to a four-year, national term as lay
                advisor to the National Conference of Catholic Bishops.
              </p>

              <p className="text-xl leading-8 text-white">
                Anna Maria holds a Bachelor&apos;s degree from Trinity
                University in Washington, D.C. as well as a certificate in
                Organizational Leadership and Not-For-Profit Management from
                Harvard University. Additionally she holds a post graduate
                certification in Leadership Coaching from Georgetown University
                and is credentialed by the International Coaching Federation.
              </p>
            </div>
            <div className="clear-both"></div>
          </div>

          <h2 className="text-5xl font-normal leading-10 tracking-tight mt-12 mb-6 clear-both">
            Testimonials
          </h2>

          <div className="flex flex-col gap-8 max-w-4xl">
            <blockquote className="text-xl leading-8 text-white border-l-4 border-white/30 pl-6">
              <span className="italic">
                &quot;When I stepped into my first company leadership role, Anna
                Maria&apos;s calm, thoughtful guidance helped me slow the game
                down and bring my executive strengths to the surface. Navigating
                a Board, working with an ownership group overseas, operating and
                growing the company all at once could have been overwhelming.
                Her impact has lasted for years—I still use our notes and
                continue to call her when challenges arise. I&apos;ve introduced
                her to my current company and look forward to working with her
                for years to come.&quot;
              </span>{" "}
              — Will Loughran, Chief Operating Officer, Concord Hospitality
            </blockquote>
            <Image
              src="/testimonial-logos/concord-logo-white.webp"
              alt="Concord Hospitality"
              width={200}
              height={200}
              className="float-left rounded-lg mr-6 mb-4 max-w-xs"
              priority
            />

            <blockquote className="text-xl leading-8 text-white border-l-4 border-white/30 pl-6">
              <span className="italic">
                &quot;At what proved to be an inflection point in my
                career—successful but ready for a deeper challenge—Anna Maria
                helped me find the clarity I couldn&apos;t reach on my own. Her
                unique style and process guided me through a pivotal decision
                that led to greater success and fulfillment. Worth every
                penny.&quot;
              </span>{" "}
              — Ramona Mockoviak, Senior Managing Director, Chevy Chase Trust
            </blockquote>

            <Image
              src="/testimonial-logos/chevy-chase-logo.png"
              alt="Chevy Chase Trust"
              width={300}
              height={400}
              className="float-left rounded-lg mr-6 mb-4 max-w-xs"
              priority
            />
            <blockquote className="text-xl leading-8 text-white border-l-4 border-white/30 pl-6">
              <span className="italic">
                &quot;Anna Maria helped me find balance and clarity as CEO of a
                $140M+ organization. I&apos;d always been a strong executor, but
                she helped me uncover a more compassionate leadership style—with
                even better results. My team is more aligned and productive. We
                are unified in mission— working with Anna Maria led to the
                evolution of our mission, which was much more expansive as we
                evolved as a team rather than an individual. Personally, I
                returned to my authentic self, becoming a better partner,
                parent, and healthier overall—physically, emotionally, and
                spiritually.&quot;
              </span>{" "}
              — Mary Kelly, CEO, StrataTech Education Group
            </blockquote>
            <Image
              src="/testimonial-logos/logo_stratatech-white.svg"
              alt="StrataTech Education Group"
              width={200}
              height={200}
              className="float-left rounded-lg mr-6 mb-4 max-w-xs"
              priority
            />
            <blockquote className="text-xl leading-8 text-white border-l-4 border-white/30 pl-6">
              <span className="italic">
                &quot;Fresh off selling my business, and looking to develop my
                skills to move to the next level, Anna Maria brought wisdom from
                both her executive experience and her grounded, human
                perspective—sometimes drawn from her family restaurant business
                experience in New York. Her insights continue to shape the way I
                approach the world today.&quot;
              </span>{" "}
              — Sam Jonas, CEO, Serial Entrepreneur.
            </blockquote>
            <Image
              src="/testimonial-logos/serial-entrepreneur-logo.png"
              alt="Serial Entrepreneur"
              width={200}
              height={200}
              className="float-left rounded-lg mr-6 mb-4 max-w-xs"
              priority
            />

            <blockquote className="text-xl leading-8 text-white border-l-4 border-white/30 pl-6">
              <span className="italic">
                &quot;Anna Maria&apos;s mentorship transformed not just my
                career but my whole life journey. Her supportive, caring, and
                challenging approach helped me discover myself more deeply,
                flourish, and lead with purpose.&quot;
              </span>{" "}
              — Mooyeon Oh-Park, MD Chief Medical Officer, Burke Rehabilitation
              Hospital
            </blockquote>
            <Image
              src="/testimonial-logos/burke-logo.png"
              alt="Burke Rehabilitation Hospital"
              width={200}
              height={200}
              className="float-left rounded-lg mr-6 mb-2 max-w-xs"
              priority
            />
            <blockquote className="text-xl leading-8 text-white border-l-4 border-white/30 pl-6">
              <span className="italic">
                &quot;Anna Maria helped me as an Executive understand what it
                truly means to be authentic, to operate within my strengths, and
                to be confident in ceding control. She helped me find peace in
                the midst of chaos, clarity, and authentic power as a leader. I
                became more effective with my teams and learned to quiet the
                inner noise that drains energy and hinders lasting success. Her
                guidance helped me lean more fully into my natural
                talents.&quot;
              </span>{" "}
              — Josh Green, CEO/Entrepreneur
            </blockquote>

            <blockquote className="text-xl leading-8 text-white border-l-4 border-white/30 pl-6">
              <span className="italic">
                &quot;Anna Maria brings a thoughtful, positive, and unique
                approach to the executive journey. She guided me through some
                challenging phases of my leadership career, aways walking beside
                me with wisdom and care. She is truly one of a kind!&quot;
              </span>{" "}
              — Jeff Nichols, CEO, Minnesota Autism Center.
            </blockquote>

            <blockquote className="text-xl leading-8 text-white border-l-4 border-white/30 pl-6">
              <span className="italic">
                &quot;Anna Maria&apos;s coaching has been transformative in both
                my professional and personal life. After more than 20 years in
                leadership, I&apos;ve found new clarity, peace, and purpose —
                even amid significant challenges. Her rare gift lies not just in
                strategic guidance, but in helping shift the beliefs and
                perspectives that unlock flow, presence, and joy.&quot;
              </span>{" "}
              — Timothy O&apos;Leary, Executive Director, Washington National
              Opera
            </blockquote>
          </div>
        </div>
      </main>
    </div>
  );
}
