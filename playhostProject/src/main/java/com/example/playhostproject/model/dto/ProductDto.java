package com.example.playhostproject.model.dto;

/**
 * packageName : com.example.playhostproject.model.dto
 * fileName : ProductDto
 * author : GGG
 * date : 2023-11-28
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-28         GGG          최초 생성
 */
public interface ProductDto {

    public Integer getPid();
    public String getName();
    public String getShortDescription();
    public String getImgUrl();
    public Integer getPrice();
    public Integer getFinalPrice();
    public String getTag();
    public Integer getDiscount();
    public String getUuid();
    public String getFileUrl();
    public String getInsertTime();
}
