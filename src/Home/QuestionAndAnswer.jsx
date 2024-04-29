import { Bounce } from "react-awesome-reveal";
const QuestionAndAnswer = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-lato mt-10 font-bold">
        Question And Answer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
        <div className="w-full border-2 rounded-lg">
          <img src="images/faq.jpg" alt="" />
        </div>
        <div>
          <h2 className="text-3xl text-center font-poppins mt-10 font-bold mb-10">
            Frequently Asked Questions
            <div className="join join-vertical w-full mt-10">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  How many outlets does your shop have and Where they are ?
                </div>
                <div className="">
                  <Bounce>
                  <p className="text-left text-[16px] font-lato px-8">
                    Our shop has established a robust presence with 10
                    strategically located outlets across Bangladesh. From the
                    bustling streets of Dhaka to the vibrant markets of
                    Chittagong, and from the cultural hub of Rajshahi to the
                    picturesque landscapes of Sylhet, our outlets cater to
                    diverse communities.{" "}
                  </p>
                  </Bounce>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  How do I place an order online?
                </div>
                <div className="collapse-content">
                  <Bounce duration={1000} damping={0.1}>
                  <p className="text-left text-[16px] font-lato px-8">
                    To order online, visit our website and browse our diverse
                    product range. Add desired items to your cart, proceed to
                    checkout, and enter shipping details and payment
                    information. Review your order and confirm. Upon successful
                    placement, you wll receive a confirmation email with
                    delivery details. Our customer support team is available for
                    any assistance needed.
                  </p>
                  </Bounce>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Discount criteria
                </div>
                <div className="collapse-content">
                  <Bounce>
                  <p className="text-left text-[16px] font-lato px-8">For every purchase totaling 1000 taka or more, customers receive a 10% discount on their entire order. This promotion is applicable to all items in our store and is automatically applied at checkout. Hurry, offer ends next week!</p>
                  </Bounce>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Are your products eco-friendly?
                </div>
                <div className="collapse-content">
                <Bounce>
                <p className="text-left text-[16px] font-lato px-8">Yes, our products are eco-friendly, crafted with a commitment to sustainability. We prioritize using renewable materials such as jute and wood, sourced from ethical and environmentally responsible suppliers.</p>
                </Bounce>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Do you offer wholesale pricing for bulk orders?
                </div>
                <div className="collapse-content">
                  <Bounce>
                  <p className="text-left text-[16px] font-lato px-8">Yes, we offer wholesale pricing for bulk orders. Our wholesale program caters to businesses and organizations seeking larger quantities of our products. Contact our wholesale team to discuss your needs and receive personalized assistance. We strive to provide competitive pricing and excellent service to meet your bulk purchase requirements efficiently.</p>
                  </Bounce>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Are your products suitable for gifts?
                </div>
                <div className="collapse-content">
                  <Bounce>
                  <p className="text-left text-[16px] font-lato px-8">Yes, our products are perfect for gifts! Whether it is a birthday, anniversary, or any special occasion, our unique jute and wooden crafts make thoughtful and memorable gifts. With a variety of options to choose from, you are sure to find the perfect present for your loved ones.</p>
                  </Bounce>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                What is your return policy?
                </div>
                <div className="collapse-content">
                  <Bounce>
                  <p className="text-left text-[16px] font-lato px-8">We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, please contact us within 30 days for a refund or exchange.</p>
                  </Bounce>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Do you ship internationally?
                </div>
                <div className="collapse-content">
                  <Bounce>
                  <p className="text-left text-[16px] font-lato px-8">Yes, we offer international shipping for our products. Shipping rates and delivery times may vary depending on the destination.</p>
                  </Bounce>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Where are your products made?
                </div>
                <div className="collapse-content">
                  <Bounce>
                  <p className="text-left text-[16px] font-lato px-8">Our jute and wooden crafts are handcrafted with care by skilled artisans, either locally or sourced from ethical and fair-trade organizations.</p>
                  </Bounce>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                How do I care for my jute and wooden items?
                </div>
                <div className="collapse-content">
                  <Bounce>
                  <p className="text-left text-[16px] font-lato px-8">For jute products, gentle spot cleaning with a damp cloth is recommended. Wooden items should be kept away from direct sunlight and excessive moisture to maintain their beauty and durability.</p>
                  </Bounce>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Do you offer customization options?
                </div>
                <div className="collapse-content">
                  <Bounce>
                  <p className="text-left text-[16px] font-lato px-8">Absolutely! We provide customization services to tailor our products to your specific preferences or requirements.</p>
                  </Bounce>
                </div>
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
