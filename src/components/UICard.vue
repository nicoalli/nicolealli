<script>
export const UICard = {
  props: {
    tag: {
      default: "div",
      type: String
    }
  },
  render() {
    const Tag = this.tag;
    return <Tag class="card">{this.$slots.default}</Tag>;
  }
};

export const UICardImage = {
  render() {
    return <div> {this.$slots.default} </div>;
  }
};

export const UICardText = {
  props: {
    titleTag: {
      default: "h2",
      type: String
    }
  },
  render() {
    const TitleTag = this.titleTag;
    return (
      <div class="card__text">
        <TitleTag class="title">{this.$slots.title}</TitleTag>
        <div class="subtitle"> {this.$slots.subtitle}</div>
        <div class="content">{this.$slots.default}</div>
      </div>
    );
  }
};

export default UICard;
</script>
