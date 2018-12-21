import React from 'react';
import './Work.scss';

const Work: React.FunctionComponent = () => {
  return (
    <div className="default-section work">
      <p>
        I make websites for a living, but we call them <b>webapps</b> to
        drive the point that our websites are <i>better</i>.
        Ehm.
      </p>
      <p>
        I used to do contracting a lot. This often meant coming somewhere,
        fixing something, getting fired for being to expensive, then
        getting called back to fix something else.
      </p>
      <p>
        So, I've been around a good share of software problems, and I feel
        like sharing, so here is
      </p>
      <h1>Lecture 1: Pages vs Apps</h1>
      <p>
        In the dark ages (~2002 for me), writing websites meant mashing some
        HTML, CSS and maybe some cgi/perl/PHP together.
        We dealt with miriad of browser incompatibility issues,
        but <b>it was hard to stuff up an entire project</b>.
      </p>
      <p>
        Sure, if your server or
        DB died, you were screwed - until you fixed it... which you did
        and things were good again. What I mean by <i>entire project</i> is
        that our grand website was made of a grand total of ~40 completely
        separate pages - if one was broken or slow,
        it <b>didn't</b> impact other pages.
      </p>
      <p>
        Fast forward to 2004 and <a href="https://en.wikipedia.org/wiki/Apache_Flex">Macromedia Flex</a>.
        We were building <a href="https://en.wikipedia.org/wiki/Rich_web_application">RIAs</a>.
        We felt like proper application
        developers. All our code was compiled into a single bundle
        (back then a <i>swf</i>&nbsp;). We
        had amazing transitions strong types, classes, good IDE and life was sweeet.
      </p>
      <p>
        Everything worked well in every browser and we kept on adding
        features... until it wasn't. Working. In any browser.
      </p>
      <p>
        Turns out, if you stuff a lot of code in a single bundle,
        things tend to go wrong.
      </p>
      <p>
        One memory leak here or infinite loop there can bring your
        great app to halt. That can be fixed.
      </p>
      <p className="large">
        Real trouble hits when your app starts getting slower and
        slower in a creepy way as you add more and more features
        (which your users demand). Splitting
        your bundle might help, but ultimately a user who
        clicks around your app all day long will load
        too much code.
      </p>
      <p>
        Suddenly, things are annoyingly slow and 
        users don't like your app.
      </p>
      <h3>
        Life lesson #1: Speed matters more than you may think
      </h3>
      <p>
        Today, <a href="https://npmjs.com">npm</a> is full of
        awesome libs and even <i>fuller</i> with less-than-awesome ones.
        Careful what you use. <a href="https://bundlephobia.com/">Check
        bundle sizes.</a> Be lean and be safe 🙀.
      </p>

      <h1>
        Enough lecturing. Let's shamelessly plug in some stuff I worked on!
      </h1>

      <h2>Investment / co-founder / buyout opportunity</h2>
      <p><a href="https://hero.work">HERO.WORK</a> powers websites of trade businesses
          and provides job finding, quoting, invoicing,
          scheduling and more. Help us take it to the next
          level as an investor or co-founder.</p>
      <h2>Workout Timer</h2>
      <p>What about CrossFit? Is that still a thing or,
        did everyone knocked themselves out with those
        hundred burpees followed by two hundred pull ups? <a href="http://crosstimer.com/">Take a trip down
        the memory lane.</a>
      </p>
    </div>
  );
};

export default Work;
