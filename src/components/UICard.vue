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
    return <Tag>{this.$slots.default}</Tag>;
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
      <div>
        <TitleTag>{this.$slots.title}</TitleTag>
        <div> {this.$slots.subtitle}</div>
        <div>{this.$slots.default}</div>
      </div>
    );
  }
};

export default UICard;
</script>
