import Header from "../components/Header";

export default function BEND() {
  return (
    <div className="bend">
      <Header customClass="relative dark-text" />
      <div className="bend-container">
        <section className="bend-intro">
          <div className="section-title">BEND, OREGON</div>
          <div className="section-info">
            <p>
              Bend is one of our favorite locations in the country which is why
              we decided to move here in 2018. The best source of information to
              make your Bend visit memorable is{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.visitbend.com/"
              >
                www.visitbend.com
              </a>
              . The Visit Bend website will be your best source to tailor your
              visit to your own personal interests. This 2019 NYTimes article{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://web.archive.org/web/20220420145916/https://www.nytimes.com/2019/05/30/travel/what-to-do-in-bend-oregon.html"
              >
                "36 hours in Bend"
              </a>{" "}
              is also a great read that should spark some ideas for your visit.
              We wish we could personally guide all our guests while visiting us
              in our home-town and welcome any questions you may have. Please
              reach out to Cody at 214.883.7765 if you have any questions!
            </p>

            <p className="p-pad-top bold">
              Bend is currently experiencing a labor shortage that is heavily
              impacting dining. Most restaurants will be fully booked several
              weeks in advance. PLEASE make reservations in advance!
            </p>

            {/* <p className="p-pad-top">
              As for our personal suggestions, we like to recommend trying to
              stay on the "West" side of the Bend (West of Highway 97) for
              lodging and the majority of activities. 
            </p> */}
          </div>
          <div className="section-subtitle">Some of Our Favorites...</div>
          <div className="section-info-flex">
            <div className="section-info-flex-item">
              <h3>Restaurants</h3>
              <ul>
                <li>Zydeco</li>
                <li>Downton</li>
                <li>Sen Thai</li>
                <li>Bos Taurus</li>
                <li>The Old Mill</li>
                <li>Wild Rose Thai</li>
                <li>Jackson's Corner</li>
                <li>Monkless Brewery</li>
                <li>Dogwood (for a drink)</li>
                <li>Sparrow Bakery and Coffee</li>
                <li>Greg's Grill (not for food, but great for a drink)</li>
              </ul>
            </div>

            <div className="section-info-flex-item">
              <h3>Things To Do:</h3>
              <ul>
                <li>Sparks Lake</li>
                <li>The Last Blockbuster!</li>
                <li>Drive Cascade Lake's Highway</li>
                <li>Walk the River Trail (start at Drake or Riverbend Park)</li>
                <li>
                  <a target="_blank" href="https://www.mtbachelor.com/">
                    Mt. Bachelor (just 20 minutes!)
                  </a>
                </li>
                <li>Stand Up Paddle Board</li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.visitbend.com/things-to-do/activities/river-lake-water/deschutes-river-floating-tubing/"
                  >
                    Float the Deschutes River
                  </a>
                </li>
                <li>White Water Rafting</li>
                <li>Visit Smith Rock</li>
                <li>Tumallo Falls</li>
                <li>High Desert Museum</li>
                <li>Old St. Francis School Hotel, Restaurant and Theater</li>
                <li>Dillon Falls</li>
                <li>Multiple World Class Golf Courses</li>
                <li>Rent a Mountain Bike and go to Phil's Trail</li>
                <li>Hire a Fishing Guide</li>
                <li>
                  Dozens of Local Brewery Tours, Tastings and Bites. Deschutes,
                  Crux, Good Life and Boneyard are Cody's favorites
                </li>
                <li>Scenic Hikes</li>
                <li className="bold">
                  Hayden Home Summer Concert on the River (8/13). Music can be
                  enjoyed while strolling the Old Mill or grabbing a bite on the
                  river. This was the fist place Cody took Jaclyn in Bend!
                  *Walkable from the wedding hotels
                </li>

                <li>Crater Lake - (2.5 hours each way)</li>
                <li>Mt. Hood (2.5 hours each way)</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bend-hotels">
          <div className="section-title">GETTING HERE</div>
          <div className="section-info">
            <p>
              The closest airport is the{" "}
              <a target="_blank" rel="noreferrer" href="http://www.flyrdm.com/">
                Redmond Airport
              </a>{" "}
              located about 20 miles North of Bend. If you're feeling
              adventerous, you can also fly into Portland, OR and drive 3.5
              hours to Bend. The drive is gorgeous and passes over the beautiful
              Mt. Hood.
            </p>
          </div>
        </section>
        {/* <section className="bend-hotels">
          <div className="section-title">HOTELS</div>
          <p>
            We are registered at two hotels that share a common parking lot.
          </p>
        </section> */}
      </div>
    </div>
  );
}
