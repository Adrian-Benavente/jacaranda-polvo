<template>
  <section
    id="section-contacto"
    :class="$style.container"
    aria-labelledby="contacto"
  >
    <div :class="$style.scrollOutContainer" data-scroll>
      <SectionTitle
        :class="$style.title"
        :title-text="'contacto'"
        :title-appears="titleAppears"
      />
      <div :class="$style.content">
        <div :class="$style.inner">
          <form :class="$style.form" @submit.prevent>
            <div>
              <input
                :class="[$style.input, $style.oneLine, $style.font]"
                type="text"
                name="nombre"
                placeholder="Nombre"
                aria-label="Nombre"
                required
              />
            </div>
            <div>
              <input
                :class="[$style.input, $style.oneLine, $style.font]"
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required
              />
            </div>
            <div>
              <label :class="[$style.label, $style.font]" for="mensaje"
                >Mensaje</label
              >
              <textarea
                :class="[$style.textarea, $style.font]"
                name="mensaje"
                id="mensaje"
                cols="30"
                rows="10"
                maxlength="5000"
                required
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="Enviar"
                :class="[$style.input, $style.send, $style.font]"
              />
            </div>
          </form>
          <div :class="$style.datos">
            <h3 :class="$style.hablemos">Hablemos</h3>
            <dl :class="$style.contactInfo">
              <div :class="$style.group">
                <dt :class="$style.email">
                  <span class="sr-only">Email:</span>
                </dt>
                <dd>
                  <a href="mailto:info@jacarandapolvo.com" target="_blank">
                    info@jacarandapolvo.com
                  </a>
                </dd>
              </div>
              <div :class="$style.group">
                <dt :class="$style.phone">
                  <span class="sr-only">Teléfono:</span>
                </dt>
                <dd>
                  <a
                    href="https://api.whatsapp.com/send?phone=5491162993535"
                    target="_blank"
                  >
                    +54 11 6299 3535
                  </a>
                </dd>
              </div>
            </dl>
            <div :class="$style.manos" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";
import SectionTitle from "@/components/lib/SectionTitle";
export default {
  name: "Contacto",
  components: { SectionTitle },
  data() {
    return {
      titleAppears: false,
    };
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      once: true,
      onShown: () => {
        setTimeout(() => (this.titleAppears = true), 500);
      },
      onHidden: () => {
        this.titleAppears = false;
      },
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
</script>

<style lang="scss" module>
@use "../../assets/scss/functions" as fn;
.container {
  align-items: end;
  background-color: black;
  overflow: hidden;
  min-height: 100vh;
  position: relative;
  display: grid;
  justify-items: end;
}
.scrollOutContainer {
  align-items: center;
  display: grid;
  height: 100%;
}
.title {
  left: -4.7%;
}
.content {
  position: relative;
  width: fn.to-proportion-width(1102, 1440);
  &::before {
    border: 1px solid white;
    content: "";
    display: block;
    height: 95.9%;
    position: absolute;
    right: 8%;
    top: 2%;
    transform: skewY(45deg);
    width: fn.to-proportion-width(20, 1440);
  }
  &::after {
    border: 1px solid white;
    content: "";
    display: block;
    height: fn.to-proportion-width(20, 1440);
    margin-left: fn.to-proportion-width(10, 1440);
    transform: skewX(45deg);
    width: 90%;
  }
  .inner {
    border: 1px solid white;
    display: flex;
    gap: 3rem;
    flex-wrap: inherit;
    justify-content: space-between;
    padding: fn.to-proportion-width(42, 1440);
    width: 90.1%;
  }
}
.form {
  width: 50%;
}
.input,
.textarea {
  background: none;
  border: none;
  border-bottom: 1px solid white;
  margin-bottom: 40px;
  width: 100%;
  &:focus {
    border-color: var(--color-hero);
    outline: none;
  }
}
.oneLine {
  height: 60px;
  @media (min-width: 768px) {
    height: fn.to-proportion-width(50, 1440);
  }
}
.font {
  color: white;
  font: 18px/30px var(--montserrat);
  &::placeholder {
    font: inherit;
    color: inherit;
  }
  @media (min-width: 768px) {
    font: fn.to-proportion-width(18, 1440) / fn.to-proportion-width(30, 1440)
      var(--montserrat);
    &::placeholder {
      font: inherit;
    }
  }
}
.label {
  display: block;
  margin-bottom: 0.75rem;
  text-align: start;
}
.textarea {
  max-height: fn.to-proportion-width(109, 1440);
  resize: none;
}
.textarea,
.send {
  border: 1px solid white;
}
.send {
  border-radius: 5px;
  cursor: pointer;
  height: 68px;
  @media (min-width: 768px) {
    height: fn.to-proportion-width(68, 1440);
  }
}
.datos {
  color: white;
  height: 100%;
  text-align: start;
  width: 30%;
}
.contactInfo {
  .group {
    align-items: center;
    display: flex;
    height: 50px;
    @media (min-width: 768px) {
      height: fn.to-proportion-width(50, 1440);
    }
  }
  dt {
    margin-right: 18px;
  }
  dd {
    a {
      font: 600 15px/50px var(--montserrat);
      @media (min-width: 768px) {
        font: 600 fn.to-proportion-width(15, 1440) /
          fn.to-proportion-width(18, 1440) var(--montserrat);
      }
    }
  }
}
.hablemos {
  font: 40px/73px var(--bebas);
  @media (min-width: 768px) {
    font: fn.to-proportion-width(40, 1400) / fn.to-proportion-width(73, 1440)
      var(--bebas);
  }
}
.email {
  background: no-repeat url("../../assets/img/contacto/email.svg");
  height: 19.71px;
  width: 28px;
}
.phone {
  background: no-repeat url("../../assets/img/contacto/wp.svg");
  height: 22px;
  width: 22px;
}
.manos {
  background: url("../../assets/img/aldea/contacto.svg") center/contain
    no-repeat;
  height: fn.to-proportion-width(127.87, 1440);
  margin-top: fn.to-proportion-width(108, 1440);
  width: fn.to-proportion-width(212.71, 1440);
}
</style>
